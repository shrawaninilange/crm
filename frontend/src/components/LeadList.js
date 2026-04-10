 import React, { useEffect, useState } from "react";
import API from "../api";

export default function LeadList() {
  const [data, setData] = useState([]);
 

  const fetchLeads = () => {
    API.get("/leads").then(res => setData(res.data));
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    API.get("/leads").then(res => setData(res.data));
  }, []);
 const updateStatus = async (id, status) => {
    try {
      await API.put(`/leads/${id}`, { status });
      fetchLeads();
    } catch (err) {
      alert("Error updating");
    }
  };
  return (
    <div>
      <h3>Leads</h3>
      {data.map(l => (
        <div key={l.id} className="box">
          <h3> {l.name} - {l.phone} - {l.source} - {l.priority}</h3>
          <select onChange={(e) => updateStatus(l.id, e.target.value)}>
            <option>Select Action</option>
            <option value="Contacted">Contacted</option>
            <option value="Converted">Converted</option>
          </select>

        </div>
      ))}
    </div>
  );
}