const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response=> response.json())
    .then(data=> {
        document.getElementById("api-input").innerHTML = `
           <h4>${data.activity}</h4>
        `
    document.getElementById("activity-name").textContent = "Now You're Moving!"
    document.body.classList.add("fun")
    })
})