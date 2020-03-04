var addTaskBtn = document.querySelector(".addition-task-btn")
var asideForm = document.querySelector(".form");
var clearAllToDo = document.querySelector(".clear-all-btn")
var containsToDoCards = document.querySelector(".todo-card-container")
var inputTask = document.querySelector(".task-items-input")
var inputTitle = document.querySelector(".title-input")
var makeToDoCardBtn = document.querySelector(".create-todo-btn")
var noToDoCards = document.querySelector(".container-no-todo-cards")
var possibleTaskList = document.querySelector(".container-potential-tasks")


var allTasksArray = [];
var localStorageArray = JSON.parse(localStorage.getItem("toDoCards")) || [];

addTaskBtn.addEventListener("click", createPotentialTask)
clearAllToDo.addEventListener("click", clearAllBtn)
makeToDoCardBtn.addEventListener("click", createToDoCard)
possibleTaskList.addEventListener("click", deletePotentialTask)

// If the page is being visited for the first time, jump to line 47
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
  var toDoCards = localStorageArray.map(function (toDoCard) {
    var newToDoCard = createToDoObjectsPageLoad(toDoCard)
    var displayedCard =  displayCards(newToDoCard)
    return displayedCard
  });
  localStorageArray = toDoCards
  return toDoCards
}

function createToDoObjectsPageLoad(toDoCard) {
  var newToDoCard = new ToDoList(toDoCard.uniqueId, toDoCard.taskTitles, toDoCard.taskList);
  return newToDoCard
}

// If the page is being visited for the first time, noTodoCards on reload.
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
  var foundTaskIndex = getTaskIndex(foundObj);
  foundObj.removeTaskObj(foundTaskIndex);
  console.log(allTasksArray)
}

function getTaskObj(taskId) {
  var foundObj = allTasksArray.find(function (task) {
    return task.id == taskId;
  });
  return foundObj
}

function getTaskIndex(foundObj) {
  var foundTaskIndex = allTasksArray.indexOf(foundObj);
  return foundTaskIndex
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
    displayCards(newToDoCard);
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

function displayCards(newToDoCard) {
  containsToDoCards.insertAdjacentHTML("beforeend",
    `<div class="todo-card" data-id="${newToDoCard.uniqueId}">
  <h3>${newToDoCard.taskTitles}</h3>
  <ul class="all-tasks-in-todo">
 ${mapOfTaskArray(newToDoCard.taskList)}
  </ul>  
  <section class="todo-board-footer">
    <button class="make-card-urgent"><img class="urgent-img" src="assets/urgent.svg" alt="Is an icon that allows user to make todo card urgent"/>URGENT</button>
    <button class="delete-todo-card" data-id="${newToDoCard.uniqueId}" onClick="deleteToDoCard(event)"><img class="delete-img-for-card" src="assets/delete.svg" alt="Is an icon that allows user to delete todo card"/>DELETE</button>
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

function deleteToDoCard(event) {
  if (event.target.closest(".delete-todo-card")) {
    var toDoCardId = event.target.closest(".delete-todo-card").getAttribute("data-id");
    deleteCardsInLSArray(toDoCardId);
    event.target.closest(".todo-card").remove();
    if (localStorageArray.length === 0) {
      notShowingCards()
    }
  }
}

function deleteCardsInLSArray(toDoCardId) {
  var foundCard = getMatchingId(toDoCardId);
  var matchedCardIndex = getIndex(foundCard);
  foundCard.deleteFromStorage(localStorageArray, matchedCardIndex)
}

function getMatchingId(toDoCardId) {
  var foundCard = localStorageArray.find(function (toDoCard) {
    return toDoCard.uniqueId == toDoCardId
  });
  return foundCard;
}

function getIndex(foundCard) {
  var matchedCardIndex = localStorageArray.indexOf(foundCard)
  return matchedCardIndex
}

function notShowingCards() {
  noToDoCards.hidden = false;
  containsToDoCards.hidden = true;
}

function showToDoCards() {
  noToDoCards.hidden = true;
  containsToDoCards.hidden = false;
}