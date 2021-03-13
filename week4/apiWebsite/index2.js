const button1 = document.getElementById("button")
const ul = document.createElement("ul")


button1.addEventListener("click", getData)

function getData(){
    axios.get("https://official-joke-api.appspot.com/jokes/ten")
    .then(response =>{
        
       myfunction(response.data)
        
            
        
    } )
}
function myfunction(data){
    for(let i = 0; i < data.length; i++){
        const li = document.createElement("li")
        li.innerHTML= `<p> setup: ${data[i].setup}</p>  <p> punchline: ${data[i].punchline }</p>`
            ul.append(li)
    }
    document.body.append(ul)
    ul.style.listStyle = "none";
    
    

}




