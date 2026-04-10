 const db = require("../db");

exports.addAgent = (req, res) => {
  const { name, isFacebookAgent } = req.body;

  db.query(
    "INSERT INTO agents (name, isFacebookAgent) VALUES (?, ?)",
    [name, isFacebookAgent],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Agent Added");
    }
  );
};

exports.getAgents = (req, res) => {
  db.query("SELECT * FROM agents", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};