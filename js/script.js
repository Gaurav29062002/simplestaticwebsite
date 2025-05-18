const taskList = [];

function addTask(list, task) {
  if (task.trim() !== '') {
    list.push({ text: task.trim(), done: false });
  }
}

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const taskInput = document.getElementById('todo-input');
  addTask(taskList, taskInput.value);
  renderTasks();
  taskInput.value = '';
  updateTaskCount();
});

function renderTasks() {
  const taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = '';

  taskList.forEach((task, index) => {
    const div = document.createElement('div');
    div.className = 'task-item' + (task.done ? ' completed' : '');
    div.textContent = task.text;

    // Toggle done on click
    div.addEventListener('click', () => {
      taskList[index].done = !taskList[index].done;
      renderTasks();
      updateTaskCount();
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent toggling done
      taskList.splice(index, 1);
      renderTasks();
      updateTaskCount();
    });

    div.appendChild(deleteBtn);
    taskListDiv.appendChild(div);
  });
}

function updateTaskCount() {
  const countSpan = document.getElementById('task-count');
  const remaining = taskList.filter(task => !task.done).length;
  countSpan.textContent = `${remaining} task${remaining !== 1 ? 's' : ''} left`;
}

document.getElementById('clear-btn').addEventListener('click', () => {
  taskList.length = 0; // clear array
  renderTasks();
  updateTaskCount();
});
