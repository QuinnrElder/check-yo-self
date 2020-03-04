class Task {
  constructor(taskId, content) {
    this.id = taskId;
    this.content = content
    this.isCompleted = false;
  }
  removeTaskObj(foundTaskIndex) {
    allTasksArray.splice(foundTaskIndex, 1);
  }

}