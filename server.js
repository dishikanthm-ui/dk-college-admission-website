const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const db=require("./db")

const app=express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

/* admission enquiry */

app.post("/enquiry",(req,res)=>{

const {name,email,phone,course,message}=req.body

const sql="INSERT INTO enquiries(name,email,phone,course,message) VALUES(?,?,?,?,?)"

db.query(sql,[name,email,phone,course,message],(err,result)=>{

if(err){
res.send("error")
}else{
res.send("Enquiry Submitted Successfully")
}

})

})

/* portfolio */

app.get("/portfolio",(req,res)=>{

db.query("SELECT * FROM portfolio",(err,result)=>{

if(err) throw err
res.json(result)

})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})