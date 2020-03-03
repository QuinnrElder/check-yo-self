var addTaskBtn = document.querySelector(".addition-task-btn")
var asideForm = document.querySelector(".form");
var clearAllToDo = document.querySelector(".clear-all-btn")
var containsToDoCards = document.querySelector(".todo-card-container")
var inputTask = document.querySelector(".task-items-input")
var inputTitle = document.querySelector(".title-input")
var makeToDoCardBtn = document.querySelector(".create-todo-btn")
var noToDoCards = document.querySelector(".container-no-todo-cards")
var possibleTaskList = document.querySelector(".container-potential-tasks")
// var taskList = document.querySelector(".container-potential-tasks");

var allTasksArray = [];
var localStorageArray = JSON.parse(localStorage.getItem("toDoCards")) || [];

addTaskBtn.addEventListener("click", createPotentialTask)
clearAllToDo.addEventListener("click", clearAllBtn)
containsToDoCards.addEventListener("click", checkTaskOffTodoCard)
makeToDoCardBtn.addEventListener("click", createToDoCard)
possibleTaskList.addEventListener("click", deletePotentialTask)

window.addEventListener('load', function () {
  handlePageLoad();
});

function handlePageLoad() {
  if (localStorageArray.length <= 0) {
    notShowingCards();
  } else {
    mapOfToDo();
    showToDoCards()
  }
}

function mapOfToDo() {
  localStorageArray.map(function (toDoCard) {
    var newToDoCard = createToDoObjectsPageLoad(toDoCard)
    return displayCardsDom(newToDoCard)
  });
}

function createToDoObjectsPageLoad(toDoCard) {
  var newToDoCard = new ToDoList(toDoCard.uniqueId, toDoCard.taskTitles, toDoCard.taskList);
  return newToDoCard
}

function createPotentialTask(event) {
  if (inputTask.value === "" || inputTitle.value === "") {
    return
  } else {
    event.preventDefault();
    var newTask = createTaskObjects(inputTask.value);
    displayTasksDom(newTask);
    allTasksArray.push(newTask);
    inputTask.value = "";
  }
}

function createTaskObjects(inputTask) {
  var newTask = new Task(Date.now(), inputTask);
  return newTask
}

function displayTasksDom(newTask) {
  possibleTaskList.insertAdjacentHTML("beforeend",
    `<li class="user-tasks" data-id="${newTask.id}"><img class="delete-img"  src="assets/delete.svg" alt="Delete newly created task">${newTask.content}</li>`);
}

function deletePotentialTask(event) {
  if (event.target.closest(".user-tasks")) {
    var taskId = event.target.closest(".user-tasks").getAttribute("data-id");
    deleteTaskInListArray(taskId);
    event.target.closest(".user-tasks").remove();
  }
}

function deleteTaskInListArray(taskId) {
  var foundObj = getTaskObj(taskId);
  var foundTaskIndex = getIndex(foundObj);
  removeTaskObj(foundTaskIndex);
}

function getTaskObj(taskId) {
  var taskObj = allTasksArray.find(function (task) {
    return task.id == taskId;
  });
  return taskObj
}

function getIndex(foundObj) {
  var foundTaskIndex = allTasksArray.indexOf(foundObj);
  return foundTaskIndex
}

function removeTaskObj(foundTaskIndex) {
  allTasksArray.splice(foundTaskIndex, 1);
}

function createToDoCard(event) {
  if (inputTitle.value === "") {
    return
  } else {
    event.preventDefault();
    showToDoCards();
    var newToDoCard = createToDoObjectClick(inputTitle.value);
    localStorageArray.push(newToDoCard);
    newToDoCard.saveToStorage(localStorageArray);
    displayCardsDom(newToDoCard);
  }
  inputTitle.value = "";
  inputTask.value = "";
  allTasksArray = [];
  possibleTaskList.innerHTML = "";
}

function createToDoObjectClick(inputTitle) {
  var newToDoCard = new ToDoList(Date.now(), inputTitle, allTasksArray);
  return newToDoCard
}

function displayCardsDom(newToDoCard) {
  containsToDoCards.insertAdjacentHTML("beforeend",
    `<div class="todo-card" data-id="${newToDoCard.uniqueId}">
  <h3>${newToDoCard.taskTitles}</h3>
  <ul class="all-tasks-in-todo">
 ${mapOfTaskArray(newToDoCard.taskList)}
  </ul>  
  <section class="todo-board-footer">
    <div class="make-card-urgent"><img class="urgent-img" src="assets/urgent.svg" alt="Is an icon that allows user to make todo card urgent"/>URGENT</div>
    <div class="delete-todo-card"><img class="delete-img-for-card" src="assets/delete.svg" alt="Is an icon that allows user to delete todo card"/>DELETE</div>
  </section>
</div>`);
  return newToDoCard
}

function mapOfTaskArray(taskList) {
  var mappedTask = taskList.map(function (task) {
    var additionOfTask = `<li class="new-todo-tasks"data-id"${task.id}"><img class="checkbox-img" src="assets/checkbox.svg" alt="Delete newly created task">${task.content}</li>`
    return additionOfTask
  });
  return mappedTask
}

function clearAllBtn() {
  if (inputTitle.value === "") {
    return
  } else {
    inputTitle = "";
    inputTask = "";
    possibleTaskList = []
  }
}

function checkTaskOffTodoCard(event) {
  if (event.target.closest(".all-tasks-in-todo")) {
    console.log(event.target.closest(".all-tasks-in-todo"))
    var removeTask = event.target.closest(".all-tasks-in-todo").getAttribute("data-id")
    console.log(removeTask)
    // removeTask.taskList
  }
}

function notShowingCards() {
  noToDoCards.hidden = false;
  containsToDoCards.hidden = true;
}

function showToDoCards() {
  noToDoCards.hidden = true;
  containsToDoCards.hidden = false;
}