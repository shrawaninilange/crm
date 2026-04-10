 const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/agentController");

router.post("/", ctrl.addAgent);
router.get("/", ctrl.getAgents);

module.exports = router;