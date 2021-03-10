axios.get("https://api.vschool.io/[Mark_Olivo]/todo")
.then(response => {
    for (let i = 0; i < response.data.length; i++) {
    const tasks = document.getElementById("alltask")
    let work = document.createElement("li")
    work.textContent = response.data[i].title
    if (response.data[i].completed === true) {
        tasks.style.textDecorationLine = "line-through" 
    }
    tasks.appendChild(work)
    }
    
})
.catch(error => console.log(error))