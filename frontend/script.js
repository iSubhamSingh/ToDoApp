function loadFn() {
  fetch("http://localhost:3000/todos", {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      let div = document.getElementById("todoItems");
      for (let i = 0; i < data.length; i++) {
        let item = div.appendChild(document.createElement("item"));
        item.innerHTML = `<div id=${data[i].id} style = " margin-top: 34px;" ">
                            <p><strong>${data[i].title}</strong> 
                                <button id=${data[i].id} style="margin-left:10px" class="btn" onClick="deleteFn(this.id)"><i class="fa fa-trash"></i></button> </p>  
                              <p>${data[i].description}</p></div>`;
      }
    });
}
loadFn();

function submitFn() {
  let newTitle = document.getElementById("title").value;
  let newDesc = document.getElementById("desc").value;
  if (newTitle.trim().length === 0 || newDesc.trim().length === 0) { // Added check for empty title or description
    alert("Title or Description can't be empty");
    return;
  }
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      description: newDesc,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(document.getElementById("title").value);
    });
}

function deleteFn(id) {
  fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
  console.log(id);
}
