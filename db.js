const { Pool } = require("pg");

/* Render database connection */

const pool = new Pool({
  connectionString: "postgresql://dkuser:t4mmD9H4jkoyiy9nmWAsDYkkQDiWzodg@dpg-d6sjonnpm1nc73bdj6q0-a.singapore-postgres.render.com/dkcollege",
  ssl: {
    rejectUnauthorized: false
  }
});

/* test connection */

pool.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
  }
});

module.exports = pool;