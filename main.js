var newTask = new Task();
var newToDoList = new ToDoList();

var inputTask = document.querySelector(".task-items-input")
var inputTitle = document.querySelector(".title-input")
var addTaskBtn = document.querySelector(".addition-task-btn")
var asideForm = document.querySelector(".form");

asideForm.addEventListener("click", eventHandler);

function eventHandler(event) {
  if (event.target === addTaskBtn) {
    createPotentialTask(event);
  }
}

function createPotentialTask(event) {
  var asideTaskContainer = document.querySelector(".container-adding-tasks");
  if (inputTask.value == "" && inputTitle.value == "") {
    addTaskBtn.disabled = true;
  }else {
    asideTaskContainer.insertAdjacentHTML('beforeend', `<div class="new-aside-tasks"><img class="delete-img" onClick="deletePossibleTask(event)" src="assets/delete.svg" alt="Delete newly created task">${inputTask.value}</div>`);
    event.preventDefault();
    newToDoList.taskList.push(inputTask.value);
    console.log(newToDoList.taskList)
    newToDoList.taskTitles.push(inputTitle.value);
    console.log(newToDoList.taskTitles)
    return
  }
}

function deletePossibleTask(event) {
  var deleteTask = document.querySelector(".delete-img")
  var deleteTasks = document.querySelector('.new-aside-tasks');
  if (event.target ==  deleteTask) {
    deleteTasks.innerHTML = "";
    return
  }
}