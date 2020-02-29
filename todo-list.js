class ToDoList {
  constructor(id, title) {
   this.uniqueId = id; 
   this.taskTitles = title;
    this.taskList = [];
    this.urgent = false;
    
  }

  getTaskObj (taskId) {
    var taskObj = this.taskList.find (function(task) {
      return task.id === taskId;
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
    console.log(taskId)
    var foundObj = this.getTaskObj (taskId)
    console.log(foundObj)
    var foundTaskIndex = this.getIndex(foundObj)
    console.log(foundTaskIndex)
     this.removeTaskObj(foundTaskIndex)
      console.log(this.taskList)
  }

  

  saveToStorage() {

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