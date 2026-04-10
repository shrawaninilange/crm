 import React from "react";
import AddLead from "./components/AddLead";
import LeadList from "./components/LeadList";
import AgentList from "./components/AgentList";
import "./App.css"
function App() {
  return (
    <div>
        <div className="app-container">
      <h1>CRM System</h1>

      <div className="card">
        <AddLead />
      </div>

      <div className="card">
        <LeadList />
      </div>

      <div className="card">
        <AgentList />
      </div>
    </div>
    </div>
  );
}

export default App;