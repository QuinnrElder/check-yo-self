var allTasks = [];
var inputTask = document.querySelector(".task-items-input")
var inputTitle = document.querySelector(".title-input")
var addTaskBtn = document.querySelector(".addition-task-btn")
var asideForm = document.querySelector(".form");
var clearAllToDo = document.querySelector(".clear-all-btn")
var possibleTaskList = document.querySelector(".task-list")
var makeToDoCardBtn = document.querySelector(".create-todo-btn")
var taskList = document.querySelector(".task-list");
var noToDo = document.querySelector(".container-no-todo-cards")
var containerOfToDo = document.querySelector(".todo-card-container")

console.log(allTasks)

var LSOfToDo = JSON.parse(localStorage.getItem("toDoCards") ) || [];
console.log(LSOfToDo)

window.addEventListener('load', function() {
   handlePageLoad()
});

addTaskBtn.addEventListener("click", createPotentialTask)
possibleTaskList.addEventListener("click", deletePotentialTask)
clearAllToDo.addEventListener("click", clearAll)
makeToDoCardBtn.addEventListener("click", createToDoCard)


function createPotentialTask(event) {
  if (inputTask.value === "" || inputTitle.value === "") {
    addTaskBtn.disabled = true;
  } else {
    event.preventDefault();
    var newTask = createTaskObjects(inputTask.value)
    displayTasksDom(newTask)
    // var newTask = new Task(Date.now(),  inputTask.value);
    // taskList.insertAdjacentHTML ( "beforeend", 
    //  `<li class="new-aside-tasks" data-id="${newTask.id}"><img class="delete-img"  src="assets/delete.svg" alt="Delete newly created task">${newTask.content}</li>`);
     allTasks.push(newTask)
     console.log(allTasks)
    inputTask.value = "";
  }
}

function deletePotentialTask(event) {
  if (event.target.closest(".new-aside-tasks")) {
    var taskId = event.target.closest(".new-aside-tasks").getAttribute("data-id")
    newToDoCard.deleteTaskInListArray(taskId);
    event.target.closest(".new-aside-tasks").remove();
    // console.log("edited task list", newToDoCard.taskList)
  }
}

function clearAll() {
  if (inputTitle.value === "") {
    clearAllToDo.disabled = true;
  } else {
    clearAllToDo.disabled = false;
    inputTitle = "";
    inputTask = "";
    newToDoCard.clearTaskList();
    // console.log("cleared task list", newToDoCard.taskList)
  }
}

function createToDoCard(event) {
if (inputTitle.value === "") {
  makeToDoCardBtn.disabled = true;

}else {
  event.preventDefault();
  noToDo.hidden = true;
  containerOfToDo.hidden = false;
// console.log(allTasks)
  var newToDoCard =  createToDoObjectClick(inputTitle.value);
LSOfToDo.push(newToDoCard);
// console.log(LSOfToDo)
  newToDoCard.saveToStorage(LSOfToDo)

  displayCardsDom (newToDoCard)
}
inputTitle.value = "";
inputTask.value = "";
allTasks = [];
taskList.innerHTML = "";
}

function createTaskObjects(inputTask) {
  var newTask = new Task(Date.now(),  inputTask);
  return newTask
}

function displayTasksDom(newTask) {
  taskList.insertAdjacentHTML ( "beforeend", 
  `<li class="new-aside-tasks" data-id="${newTask.id}"><img class="delete-img"  src="assets/delete.svg" alt="Delete newly created task">${newTask.content}</li>`);
}

function handlePageLoad() {
  mapOfToDo()
  noToDo.hidden = true;
  containerOfToDo.hidden = false;
}

function mapOfToDo() {
LSOfToDo.map(function(toDoCard){
  var newToDoCard =createToDoObjectsPageLoad(toDoCard)
  // console.log(newToDoCard)
  return displayCardsDom(newToDoCard)
  console.log(newToDoCard)
  // displayCardsDom (newToDoCard)
});
}

function createToDoObjectClick(inputTitle) {
  var newToDoCard = new ToDoList(Date.now(), inputTitle, allTasks);
  // console.log(newToDoCard)
  return newToDoCard
}

function createToDoObjectsPageLoad(toDoCard) {
  // console.log(newToDoCard)
  var newToDoCard = new ToDoList(toDoCard.uniqueId, toDoCard.taskTitles, toDoCard.taskList);
  // console.log(newToDoCard)
  return newToDoCard
}

function displayCardsDom (newToDoCard) {
  // console.log(newToDoCard)
  containerOfToDo.insertAdjacentHTML ( "beforeend",  
  `<div class="todo-card" data-id="${newToDoCard.uniqueId}">
  <h3>${newToDoCard.taskTitles}</h3>
  <ul class="all-tasks-in-todo">
  <li class="new-todo-tasks" data-id="${newToDoCard.uniqueId}"><img class="delete-img"  src="assets/delete.svg" alt="Delete newly created task">${newToDoCard.taskList}</li>
  </ul>  
  <section class="todo-board-footer">
    <div class="make-card-urgent"><img class="urgent-img" src="assets/urgent.svg" alt="Is an icon that allows user to make todo card urgent"/>URGENT</div>
    <div class="delete-todo-card"><img class="delete-img-for-card" src="assets/delete.svg" alt="Is an icon that allows user to delete todo card"/>DELETE</div>
  </section>
</div>`);
}