const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");

const app = express();

/* middleware */

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

/* test route */

app.get("/", (req, res) => {
  res.send("DK College of Engineering Website Running");
});

/* admission enquiry form API */

app.post("/enquiry", async (req, res) => {
  try {

    const { name, email, phone, course, message } = req.body;

    const query =
      "INSERT INTO enquiries(name,email,phone,course,message) VALUES($1,$2,$3,$4,$5)";

    await pool.query(query, [name, email, phone, course, message]);

    res.send("Enquiry Submitted Successfully");

  } catch (error) {

    console.log(error);
    res.status(500).send("Database Error");

  }
});

/* CREATE TABLE AUTOMATICALLY */

pool.query(`
CREATE TABLE IF NOT EXISTS enquiries(
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
phone VARCHAR(20),
course VARCHAR(100),
message TEXT
);
`)
.then(()=>console.log("Table ready"))
.catch(err=>console.log(err));

/* start server */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});