const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/enquiry",(req,res)=>{
  const {name,email,phone,course,message} = req.body;

  db.query(
    "INSERT INTO enquiries(name,email,phone,course,message) VALUES (?,?,?,?,?)",
    [name,email,phone,course,message],
    (err,result)=>{
      if(err) return res.send(err);
      res.send("Enquiry submitted");
    }
  );
});

app.get("/enquiries",(req,res)=>{
  db.query("SELECT * FROM enquiries",(err,result)=>{
    if(err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");
});