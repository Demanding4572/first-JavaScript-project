# first-JavaScript-project
to do lict on javaScript

---------------------------------------------------------- Aлгоритм виконання script.js -------------------------------------------------------------

Спочатку в файлі index.html підключаються файли style.css і script.js, щоб стилізувати сторінку і додати логіку.

У файлі script.js створюємо змінні, щоб зберігати елементи сторінки, з якими будемо працювати:

todoInput: елемент введення для введення нових задач.

```
// Get DOM elements
const todoInput = document.getElementById('todo-input');
```

addButton: кнопка "Add", яку ми натискаємо для додавання задачі.

```
// Get DOM elements
const addButton = document.getElementById('add-button');
```
todoList: список, куди будемо додавати задачі.

```
// Get DOM elements
const todoList = document.getElementById('todo-list');
```

Ініціалізуємо масив todos, в якому будемо зберігати задачі.

```
// Initialize todos array
  let todos = [];
```

Зараз масив порожній, тобто у нас немає жодної задачі.


Визначаємо функції, які допоможуть нам працювати зі списком задач:

addTodo(): Додає нову задачу до масиву todos та оновлює список задач на сторінці.

```
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

```

removeTodo(): Видаляє задачу з масиву todos за її унікальним ідентифікатором (id) та оновлює список задач на сторінці.

```
// Function to remove a todo
function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

```

toggleCompletion(): Змінює статус виконання задачі (виконано/не виконано) за її id та оновлює список задач на сторінці.

```
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
```

Функція renderTodos(): Відповідає за оновлення списку задач на сторінці. 
Вона очищує список, створює нові елементи для кожної задачі та встановлює їх відповідно до поточного стану масиву todos. 
Для кожної задачі створюється li елемент (елемент списку), який може бути відмічений як виконаний або не виконаний. 
До кожного li елементу також додається кнопка "Remove" для видалення задачі.

```
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

```

Встановлюємо обробники подій:

На кнопку "Add" (кнопка додавання задачі) встановлюємо обробник події, який викликає функцію addTodo() при натисканні кнопки.
На кожен елемент li списку встановлюємо обробник події, який викликає функцію toggleCompletion() при кліку на задачу.
На кожну кнопку "Remove" встановлюємо обробник події, який викликає функцію removeTodo() при натисканні кнопки.
Останній рядок renderTodos(); викликає функцію renderTodos() для початкового відображення списку задач на сторінці, якщо він не порожній.

```
// Event listener for add button click
addButton.addEventListener('click', addTodo);

// Initial rendering of todos
renderTodos();

```
