class ToDoList {
  constructor(id, title, array) {
    this.uniqueId = id;
    this.taskTitles = title;
    this.taskList = array;
    this.urgent = false;
  }

  saveToStorage(localStorageArray) {
    var stringifiedToDoCard = JSON.stringify(localStorageArray);
    localStorage.setItem("toDoCards", stringifiedToDoCard);
  }

  retrieveLocalStorage() {

  }

  deleteFromStorage() {

  }

  // should update the ToDo's title and urgency
  updateToDo() {

  }

  // should update a tasks content if  it has been completed
  updateTask() {

  }
}