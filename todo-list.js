class ToDoList {
  constructor(id, title, array) {
   this.uniqueId = id; 
   this.taskTitles = title;
    this.taskList = array;
    this.urgent = false;
    
  }

  clearTaskList() {
    this.taskList = []
  }

  getTaskObj (taskId) {
    console.log(taskId)
    var taskObj = this.taskList.find(function(task) {
      console.log(task)
      return task.id == taskId;
    })
    return taskObj
  }

getIndex(foundObj) {
  var foundTaskIndex = this.taskList.indexOf(foundObj)
  return foundTaskIndex
}

removeTaskObj(foundTaskIndex) {
 this.taskList.splice(foundTaskIndex, 1);
}

  deleteTaskInListArray(taskId) {
    var foundObj = this.getTaskObj (taskId)
    var foundTaskIndex = this.getIndex(foundObj) 
     this.removeTaskObj(foundTaskIndex)
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