document.getElementById("enquiryForm").addEventListener("submit",function(e){

e.preventDefault()

const data={

name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
course:document.getElementById("course").value,
message:document.getElementById("message").value

}

fetch("/enquiry",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)

})

.then(res=>res.text())
.then(data=>alert(data))

})