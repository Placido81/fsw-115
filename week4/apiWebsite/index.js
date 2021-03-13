const button1 = document.getElementById("button");


const button1 = document.getElementById("button")
const ul = document.createElement("ul")


button1.addEventListener("click", getData);

function getData(){
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(response =>{
        
       myfunction(response.data)
         
    } )
}
function myfunction(data){
    for(let i = 0; i < data.length; i++){
        const li = document.createElement("li")
        li.innerHTML= `${data[i].all}`
            ul.append(li)
            console.log(myFunction) 
    }
    

    

}

 

