class ToDoList {
  constructor(id, title, array) {
   this.uniqueId = id; 
   this.taskTitles = title;
  this.taskList = array;
  this.urgent = false;
  }

   saveToStorage(LSOfToDo) {
    var stringifiedToDoCard = JSON.stringify(LSOfToDo);
    localStorage.setItem("toDoCards", stringifiedToDoCard);
  }

  clearInput() {
    this.uniqueId = "";
    this.taskTitles = "";
    this.taskList = [];
    this.urgent = false;
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