function myFunction(){
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        
        let data = JSON.parse(xhr.responseText)
        console.log("button",data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }else if(xhr.readyState === 4 && xhr.state != 200){
        console.log(xhr.responseText)

    }
}
}
function showData(data){
     
    for(let i = 0; i < data.length; i++){
        
    console.log("data")
        const character = document.createElement('h1')
        character.textContent = data[i].name
        document.body.appendChild(character)
    }
}
const bottom = document.getElementById("data")
bottom.addEventListener("click", myFunction)