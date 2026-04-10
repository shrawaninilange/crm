 const db = require("../db");
const { assignLead } = require("../services/assignmentService");

// CREATE LEAD
exports.createLead = (req, res) => {
  const { name, phone, source, priority } = req.body;

  if (!name || !phone) {
    return res.status(400).send({ message: "Missing fields" });
  }

  assignLead(req.body, (err, agent) => {
    if (err) return res.status(400).send({ message: err });

    const query = `
      INSERT INTO leads (name, phone, source, priority, assignedAgentId)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [name, phone, source, priority, agent.id], (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }

      // increase agent load
      db.query(
        "UPDATE agents SET activeLeads = activeLeads + 1 WHERE id = ?",
        [agent.id]
      );

      res.send({ message: "Lead Created", agent });
    });
  });
};

// GET LEADS
exports.getLeads = (req, res) => {
  db.query("SELECT * FROM leads", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

// UPDATE STATUS + CONTACT LOGIC
exports.updateLeadStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.query("SELECT * FROM leads WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);

    const lead = result[0];
    if (!lead) return res.status(404).send("Lead not found");

    let contactCount = lead.contactCount;
    let finalStatus = status;

    // If contacted → increase count
    if (status === "Contacted") {
      contactCount += 1;
    }

    // Auto Lost logic
    if (contactCount >= 3 && status !== "Converted") {
      finalStatus = "Lost";
    }

    db.query(
      "UPDATE leads SET status = ?, contactCount = ? WHERE id = ?",
      [finalStatus, contactCount, id],
      (err) => {
        if (err) return res.status(500).send(err);

        res.send({
          message: "Updated",
          status: finalStatus,
          contactCount
        });
      }
    );
  });
};