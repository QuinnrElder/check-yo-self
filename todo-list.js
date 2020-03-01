class ToDoList {
  constructor(id, title) {
   this.uniqueId = id; 
   this.taskTitles = title;
    this.taskList = [];
    this.urgent = false;
    
  }

  pushToTaskList (newTask) {
    this.taskList.push(newTask);
  }

  clearTaskList() {
    this.taskList = []
  }

  timeStamp() {
    this.uniqueId = Date.now();
  }

  labelTitle(titleValue) {
    this.taskTitles = inputTitle.value
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

   saveToStorage() {
    var toDoId = this. uniqueId;
    var toDoTitle = this.taskTitles;
    var taskList = this.taskList;
    var urgency = this.urgent;

    var toDoCardInfo = {
      id: toDoId,
      title: toDoTitle,
      tasks: taskList,
      urgent: urgency,
    }

    var stringifiedToDoCard = JSON.stringify(toDoCardInfo);
    localStorage.setItem("toDoCard", stringifiedToDoCard);
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