class Task {
  constructor() {
    this.isCreated = false;
    this.isDeleted = false;
  }
  created() {
    this.isCreated = true;
  }
  deleted() {
    this.isDeleted = true;
    this.isCreated = false;
  }
}