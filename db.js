const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "gateway01-privatelink.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "3yxbg8HYxZg2x3A.root",
  password: "ch8xHEdJJzFOKxJe",
  database: "dkcollege",
  ssl: {
    rejectUnauthorized: true
  }
});

db.connect(err=>{
  if(err){
    console.log("Database error",err);
  } else {
    console.log("TiDB Connected");
  }
});

module.exports = db;