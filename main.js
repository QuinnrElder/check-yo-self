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
    addTaskBtn.disabled = true;
  } else {
    event.preventDefault();
    var newTask = new Task(Date.now(),  inputTask.value);
    taskList.insertAdjacentHTML ( "beforeend",  `<li class="new-aside-tasks" data-id="${newTask.id}"><img class="delete-img"  src="assets/delete.svg" alt="Delete newly created task">${newTask.content}</li>`);
    newToDoList.taskList.push(newTask);
  
    inputTask.value = "";
  }
}

function deletePotentialTask(event) {
  if (event.target.closest(".new-aside-tasks")) {
    var taskId = event.target.closest(".new-aside-tasks").getAttribute("data-id")
    newToDoList.deleteTaskInListArray(taskId);
    event.target.closest(".new-aside-tasks").remove();
  }
}

function clearAll() {
  if (inputTitle.value === "" || inputTask.value === "") {
    clearAllToDo.disabled = true;
  } else {
    console.log(newToDoList.taskList)
    clearAllToDo.disabled = false;
    inputTitle = "";
    inputTask = "";
    newToDoList.taskList = [];
    console.log(newToDoList.taskList)
  }
}

function disableButton() {

}

function enableButton() {

}