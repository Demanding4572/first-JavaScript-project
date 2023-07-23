// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Initialize todos array
let todos = [];

// Function to add a new todo
function addTodo() {
    const title = todoInput.value.trim();

    if (title === '') {
        alert('Please enter a valid task.');
        return;
    }

    const newTodo = {
        id: Date.now(),
        title: title,
        completed: false,
    };

    todos.push(newTodo);
    renderTodos();
    todoInput.value = '';
}

// Function to remove a todo
function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Function to toggle todo completion
function toggleCompletion(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed,
            };
        }
        return todo;
    });
    renderTodos();
}

// Function to render todos on the page
function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        li.classList.toggle('completed', todo.completed);

        li.addEventListener('click', () => toggleCompletion(todo.id));

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeTodo(todo.id));

        li.appendChild(removeButton);
        todoList.appendChild(li);
    });
}

// Event listener for add button click
addButton.addEventListener('click', addTodo);

// Initial rendering of todos
renderTodos();
