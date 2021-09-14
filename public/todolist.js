let btnAdd = document.getElementById("btnAdd");
let inpTask = document.getElementById("inpTask");
let list = document.getElementById("list");

btnAdd.addEventListener("click", addNewTask);

function addNewTask(){
    let text = inpTask.value;
    params = {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: text }),
    };
    let str = '';
    fetch("/todos/", params)
        .then((response) => response.json())
        .then((data) => {
            console.log("Todo - ", data)
            for(todo of data){
                str += "<li>"+todo.task+"</li>"
            }
            list.innerHTML = str;
        });
}