const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Database connection (TiDB / MySQL)
const db = mysql.createConnection({
  host: "gateway01-privatelink.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "3yxbg8HYxZg2x3A.root",
  password: "XyRCBz2tjTqP7nhN",
  database: "dkcollege",
  ssl: {
    rejectUnauthorized: true
  }
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected");
  }
});

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Submit enquiry
app.post("/enquiry", (req, res) => {
  const { name, email, phone, course, message } = req.body;

  const sql =
    "INSERT INTO enquiries (name,email,phone,course,message) VALUES (?,?,?,?,?)";

  db.query(sql, [name, email, phone, course, message], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error saving enquiry");
    } else {
      res.send("Enquiry submitted successfully");
    }
  });
});

// View enquiries
app.get("/enquiries", (req, res) => {
  db.query("SELECT * FROM enquiries", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});