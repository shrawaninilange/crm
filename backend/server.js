 const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/leads", require("./routes/leadRoutes"));
app.use("/agents", require("./routes/agentRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});