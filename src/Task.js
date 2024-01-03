// src/Task.js
class Task {
    constructor(description, dueDate = null, completed = false, tags = []) {
      this.description = description;
      this.dueDate = dueDate;
      this.completed = completed;
      this.tags = tags;
    }
  
    markAsCompleted() {
      this.completed = true;
    }
  
    markAsPending() {
      this.completed = false;
    }
  
    addTag(tag) {
      this.tags.push(tag);
    }
  
    removeTag(tag) {
      const index = this.tags.indexOf(tag);
      if (index > -1) {
        this.tags.splice(index, 1);
      }
    }
  
    toString() {
      return `${this.description} - ${this.completed ? 'Completed' : 'Pending'}, Due: ${this.dueDate}`;
    }
  
    static get Builder() {
      class Builder {
        constructor(description) {
          this.task = new Task(description);
        }
  
        withDueDate(dueDate) {
          this.task.dueDate = dueDate;
          return this;
        }
  
        withTag(tag) {
          this.task.tags.push(tag);
          return this;
        }
  
        build() {
          return this.task;
        }
      }
      return Builder;
    }
  }
  
  export default Task;
  