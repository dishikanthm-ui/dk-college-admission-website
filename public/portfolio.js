fetch("/portfolio")

.then(res=>res.json())

.then(data=>{

let output=""

data.forEach(dev=>{

output+=`

<div class="portfolio-card">

<img src="images/${dev.image}">

<h2>${dev.name}</h2>

<h3>${dev.title}</h3>

<p>${dev.about}</p>

</div>

`

})

document.getElementById("portfolio").innerHTML=output

})