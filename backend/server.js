require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "user_data",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL Database");
});

// API Route to Insert Data
app.post("/submit", (req, res) => {
  const { name, age, organisation } = req.body;
  const sql = "INSERT INTO users (name, age, organisation) VALUES (?, ?, ?)";

  db.query(sql, [name, age, organisation], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: "User data saved successfully" });
  });
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
