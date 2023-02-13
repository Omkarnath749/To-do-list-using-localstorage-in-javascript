const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
const removeall = document.getElementById("remove-btn");

var todoArray = [];
displayTodo();
recordscheck();

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();

    
    let todo = localStorage.getItem("todo")
        if(text.value.trim() == "" ){
            alert("put the value");
            
    
        }
        else if(text.value != "")
        {
            todoArray.push(text.value); 
            text.value = "";
            localStorage.setItem("todo", JSON.stringify(todoArray));

        }
        else  {
            todoArray = JSON.parse(todo);
        }




    displayTodo();
    recordscheck();
    
});



function displayTodo() {
let todo = localStorage.getItem("todo");
    if (todo === null) {

    todoArray = [];
    } else {
        
        todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    let listBox = document.getElementById("listBox");
    todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <th scope="row">${ind+1}</th>
    <p class='w-full text-grey-darkest' class="-tracking-2">${list}</p>
    <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
    <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
    </div>`;
    
    });
    listBox.innerHTML = htmlCode;
       


    }


function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");

    if(todo==0)
    {
        removeall.style.display = "none";
    }
    else if(todo==1){
        todoArray = JSON.parse(todo);
        todoArray.splice(ind, 1);
        localStorage.setItem("todo", JSON.stringify(todoArray));
        removeall.style.display = "none";
        displayTodo();
    }
    else{
        todoArray = JSON.parse(todo);
        todoArray.splice(ind, 1);
        localStorage.setItem("todo", JSON.stringify(todoArray));
        removeall.style.display = "block";
        displayTodo();
    }

   // recordscheck();
}
//edit button
function edit(ind) {
    saveInd.value = ind;
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    text.value = todoArray[ind].replace( / +/g, ' ');
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
}


saveTaskButton.addEventListener("click", () => {

let todo = localStorage.getItem("todo");
  
    if(todo == null){
        todoArray = [];
    
    alert("Please fill the data there is no data available");
    
    }else{
        todoArray = JSON.parse(todo);
    }
    let id = saveInd.value;
    todoArray[id]= text.value;
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
    recordscheck();
    

    
    });
 

//remove all button
removeall.addEventListener('click',() => {
    localStorage.clear()
    todoArray = [];
    displayTodo();
    recordscheck();
    });
    


//data chreck
function recordscheck() {
    let todo = localStorage.getItem("todo");
    if(todo == null){
        removeall.style.display = "none"
    }else{
        removeall.style.display = "block"
    }
    displayTodo();
}








    













