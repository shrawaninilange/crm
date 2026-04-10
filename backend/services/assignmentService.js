 const db = require("../db");

const assignLead = (lead, callback) => {
  db.query("SELECT * FROM agents WHERE isActive = true", (err, agents) => {
    if (err) return callback(err);

    // Facebook logic
    if (lead.source === "Facebook") {
      agents = agents.filter(a => a.isFacebookAgent);
    }

    if (agents.length === 0) return callback("No agents available");

    // High priority → top 2
    if (lead.priority === "High") {
      agents.sort((a, b) => a.activeLeads - b.activeLeads);
      agents = agents.slice(0, 2);
    }

    // Least loaded
    agents.sort((a, b) => a.activeLeads - b.activeLeads);
    const selected = agents[0];

    callback(null, selected);
  });
};

module.exports = { assignLead };