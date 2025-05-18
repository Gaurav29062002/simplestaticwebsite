const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const div = document.createElement('div');
    div.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = todo;

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = '×';
    btn.onclick = () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    div.appendChild(span);
    div.appendChild(btn);
    todoList.appendChild(div);
  });
}

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    todos.push(task);
    saveTodos();
    renderTodos();
    todoInput.value = '';
    todoInput.focus();
  }
});

renderTodos();
