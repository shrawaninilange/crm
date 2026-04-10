 import React, { useEffect, useState } from "react";
import API from "../api";

export default function AgentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/agents").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h3>Agents</h3>
      {data.map(a => (
        <div key={a.id}>
          {a.name} - Leads: {a.activeLeads}
        </div>
      ))}
    </div>
  );
}