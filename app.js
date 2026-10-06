const todoList = document.querySelector('.todo-list');
const input = document.getElementById('new-todo');
const addButton = document.querySelector('button');

const listTodos = [
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
];
localStorage.setItem('todo-list', JSON.stringify(listTodos));

addButton.addEventListener('click', () => {
    const newTodo = input.value.trim();
    if (newTodo) {
        const listItem = document.createElement('li');
        listItem.textContent = newTodo;
        todoList.appendChild(listItem);
        input.value = '';

        const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
        todos.push({ "text": newTodo, "completed": false });
        localStorage.setItem('todo-list', JSON.stringify(todos));
        renderTodos();
    }
});

const renderTodos = () => {
     todoList.innerHTML = '';
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.text;
        todoList.appendChild(listItem);
    });
};

renderTodos();

