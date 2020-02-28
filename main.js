var newTask = new Task();
var newToDoList = new ToDoList();

var addTaskInAside = document.querySelector(".addition-task-btn")
var formListener = document.querySelector(".form");

formListener.addEventListener("click", asideEventHandler);

function asideEventHandler(event) {
  if (event.target.contains(addTaskInAside)){ 
    checkInputValuesInAside();
    createPotentialTask();
  }
}

function checkInputValuesInAside() {
  var inputTask = document.querySelector(".task-items-input")
  var inputTitle = document.querySelector(".title-of-task-input")
  if (inputTask.value === "" && inputTitle.value === "") {
    addTaskInAside.disable = true;
  }
}

function createPotentialTask() {
  var asideTaskContainer = document.querySelector(".container-adding-tasks");
  var userInput = taskInput.value;
  console.log(userInput);
  asideTaskContainer.insertAdjacentHTML('afterend', `<div class="new-aside-tasks"><img class="delete-img" src="assets/delete.svg" alt="Delete newly created task">${userInput}</div>`);
  newToDoList.push(userInput);
}