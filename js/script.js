const { addTask } = require('./tasks');

const taskList = [];

document.getElementById('addBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  addTask(taskList, taskInput.value);
  renderTasks();
  taskInput.value = '';
});

function renderTasks() {
  const taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = '';
  taskList.forEach(task => {
    const div = document.createElement('div');
    div.textContent = task;
    taskListDiv.appendChild(div);
  });
}
