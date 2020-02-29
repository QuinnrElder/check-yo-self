var newToDoList = new ToDoList();

var inputTask = document.querySelector(".task-items-input")
var inputTitle = document.querySelector(".title-input")
var addTaskBtn = document.querySelector(".addition-task-btn")
var asideForm = document.querySelector(".form");
var clearAllToDo = document.querySelector(".clear-all-btn")
var possibleTaskList = document.querySelector(".task-list")

addTaskBtn.addEventListener("click", createPotentialTask)
possibleTaskList.addEventListener("click", deletePotentialTask)
clearAllToDo.addEventListener("click", clearAll)



function createPotentialTask(event) {
  var taskList = document.querySelector(".task-list");
  if (inputTask.value == "" && inputTitle.value == "") {
    event.preventDefault();
    addTaskBtn.disabled = true;
  } else {
    event.preventDefault();
    var newTask = new Task(Date.now(),  inputTask.value);
    taskList.insertAdjacentHTML ( "beforeend",  `<li class="new-aside-tasks" data-id="${newTask.id}"><img class="delete-img"  src="assets/delete.svg" alt="Delete newly created task">${newTask.content}</li>`);
    newToDoList.taskList.push(newTask);
    // console.log( newToDoList.taskList)
    // console.log(newTask)
    inputTask.value = "";
  }
}

// what am I doing where i can only delete one thing???????
function deletePotentialTask(event) {
  if (event.target.closest(".new-aside-tasks")) {
    console.log(event.target.closest(".new-aside-tasks"))
    var taskId = event.target.closest(".new-aside-tasks").getAttribute("data-id")
    // console.log(taskId)
    newToDoList.deleteTaskInListArray(taskId);
    event.target.closest(".new-aside-tasks").remove();
  
  }
}

function clearAll() {

  if (inputTitle === "" || inputTask === "") {
    clearAllToDo.disabled = true;
    console.log(clearAllToDo.disabled)
  } else {
    clearAllToDo.disabled = false;
    inputTitle = "";
    inputTask = "";
  }
}

function disableButton() {

}

function enableButton() {

}