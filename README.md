
 # 🚀 Smart Lead Assignment
 System (Mini CRM)
  <img width="1225" height="845" alt="image" src="https://github.com/user-attachments/assets/aea75e9f-7355-4143-94ee-37c04cb81286" />
 <img width="1238" height="584" alt="image" src="https://github.com/user-attachments/assets/b3eae4fd-8f0a-4b8e-ab4f-60364f3e75e7" />

## 📌 Objective

This project is a mini CRM system that manages:

* Lead creation
* Agent management
* Smart automatic lead assignment

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js + Express
* **Database:** MySQL

---

## 📁 Project Structure

```
crm/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── db.js
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api.js
│   │   ├── App.js
```
## images
 

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Project

```
git clone https://github.com/shrawaninilange/crm.git
cd crm
```

---

### 🔹 2. Backend Setup

```
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 🔹 3. Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

### 🔹 4. Database Setup

Open MySQL / phpMyAdmin and run:

```
CREATE DATABASE crm;
USE crm;
```

#### Agents Table

```
CREATE TABLE agents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    isActive BOOLEAN DEFAULT true,
    isFacebookAgent BOOLEAN DEFAULT false,
    activeLeads INT DEFAULT 0
);
```

#### Leads Table

```
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20),
    source VARCHAR(50),
    priority VARCHAR(20),
    status ENUM('New','Contacted','Converted','Lost') DEFAULT 'New',
    contactCount INT DEFAULT 0,
    assignedAgentId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🧠 Core Features

### ✅ 1. Lead Creation

* Add lead with:

  * Name
  * Phone
  * Source
  * Priority

---

### ✅ 2. Agent Management

* Add agents
* Track active leads count

---

### ✅ 3. Smart Assignment Logic

* Assign lead to **least loaded agent**
* **High priority leads** → top 2 agents
* **Facebook leads** → only Facebook agents
* Skip inactive agents

---

### ✅ 4. Lead Status Tracking

Each lead has status:

```
New → Contacted → Converted / Lost
```

---

### ✅ 5. Auto Lost Logic

* Every time status = `Contacted`
  → contactCount increases

* If:

```
contactCount >= 3 AND status ≠ Converted
```

➡️ Lead automatically becomes:

```
Lost
```

---

## 🔄 API Endpoints

### Leads

```
POST   /leads        → Create Lead
GET    /leads        → Get all leads
PUT    /leads/:id    → Update status
```

### Agents

```
POST   /agents       → Add agent
GET    /agents       → Get agents
```

---

## 🧪 Example Request

### Create Lead

```
POST /leads
```

```
{
  "name": "John",
  "phone": "9876543210",
  "source": "Website",
  "priority": "High"
}
```

---

## 🎯 Business Logic Explanation

* Assignment is handled in **service layer**
* Ensures clean separation of concerns
* Uses database-driven load balancing
* Handles edge cases like:

  * No agents available
  * Facebook-only assignment
  * High-priority distribution

---

## ⚡ Bonus Features (Optional)

* Real-time updates (Socket.io)
* Dashboard with stats
* Auto reassign after 2 hours
* UI improvements

---

## 🧑‍💻 Author

Your Name

---

## 📌 Notes

* Ensure MySQL is running
* Backend must run before frontend
* Insert agents before creating leads

---

## 🎉 Conclusion

This project demonstrates:

* Full-stack development
* REST API design
* Business logic implementation
* Database relationships

---
