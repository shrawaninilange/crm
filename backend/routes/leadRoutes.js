 const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/leadController");

router.post("/", ctrl.createLead);
router.get("/", ctrl.getLeads);
router.put("/:id", ctrl.updateLeadStatus);

module.exports = router;