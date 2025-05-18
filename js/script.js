const taskList = [];

function addTask(list, task) {
  if (task.trim() !== '') {
    list.push(task.trim());
  }
}

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent page reload on form submit

  const taskInput = document.getElementById('todo-input');
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
