require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if needed
  password: "4296@Pokemon", // Add your MySQL password
  database: "user_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL Database");
});

// API Route to handle form submission (Adding a Candidate)
app.post("/submit", (req, res) => {
  const { name, age, organisation } = req.body;

  if (!name || !age || !organisation) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO users (name, age, organisation, votes) VALUES (?, ?, ?, 0)";
  db.query(sql, [name, age, organisation], (err, result) => {
    if (err) {
      console.error("Error inserting data: " + err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "User data saved successfully", candidateId: result.insertId });
  });
});

// API to get all candidates
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching users: " + err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(result);
  });
});

// API to get details of a specific candidate by ID
app.get("/candidate/:id", (req, res) => {
  const candidateId = req.params.id;
  const sql = "SELECT * FROM users WHERE id = ?";
  
  db.query(sql, [candidateId], (err, result) => {
    if (err) {
      console.error("Error fetching candidate details: " + err);
      return res.status(500).json({ error: "Database error" });
    }
    
    if (result.length === 0) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    
    res.status(200).json(result[0]);
  });
});

// API to increment votes for a candidate
app.post("/vote/:id", (req, res) => {
  const candidateId = req.params.id;
  const sql = "UPDATE users SET votes = votes + 1 WHERE id = ?";

  db.query(sql, [candidateId], (err, result) => {
    if (err) {
      console.error("Error updating votes: " + err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Vote counted successfully!" });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
