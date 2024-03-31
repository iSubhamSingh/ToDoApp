

function loadFn(){
    fetch("http://localhost:3000/todos",{
        method: "GET"
    }).then((resp) => {
        return resp.json();
    }).then((data) => {
        let div = document.getElementById("todoItems");
        for(let i = 0; i <data.length; i++){
            
            let item =  div.appendChild(document.createElement("item"));
            item.innerHTML = `<div style = "border:2px solid white; margin: 4px;"><p><strong>${data[i].title}</strong></p>  
                              <p>${data[i].description}</p></div>`;
        }
    })
}



function submitFn(){
    
    fetch("http://localhost:3000/todos", {
        method: "POST",
        body : JSON.stringify({
            title: document.getElementById("title").innerText,
            description: document.getElementById("desc").innerText
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resp) => {
        return resp.json();
    }).then((data) => {
        console.log(document.getElementById("title").innerText);
        
    })
}


