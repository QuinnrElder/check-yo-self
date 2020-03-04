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

  deleteFromStorage(localStorageArray, matchedCardIndex) {
    localStorageArray.splice(matchedCardIndex, 1)
    this.saveToStorage(localStorageArray)

  }
}