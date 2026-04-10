 import React, { useState } from "react";
import API from "../api";

export default function AddLead() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await API.post("/leads", form);
    alert("Created");
  };

  return (
    <div>
      <form>
         <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})}/>
      
      <select onChange={e => setForm({...form, source: e.target.value})}>
         <option>select</option>
        <option>Website</option>
        <option>Facebook</option>
      </select>

      <select onChange={e => setForm({...form, priority: e.target.value})}>
         <option>select</option>
        <option>Low</option>
        <option>High</option>
      </select>

      <button onClick={submit}>Add Lead</button>
   
      </form>
        </div>
  );
}