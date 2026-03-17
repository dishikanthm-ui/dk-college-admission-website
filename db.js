const mysql = require("mysql2");

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"Dishi@2007",
database:"dkcollege"
});

db.connect((err)=>{
if(err){
console.log("Database Error");
}else{
console.log("MySQL Connected");
}
});

module.exports=db;