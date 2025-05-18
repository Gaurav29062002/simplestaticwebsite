// js/tasks.js

function addTask(taskList, newTask) {
    if (newTask && newTask.trim() !== '') {
      taskList.push(newTask.trim());
    }
    return taskList;
  }
  
  module.exports = { addTask };
  