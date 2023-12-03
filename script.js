document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let todos = [];

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (todoInput.value.trim() !== '') {
            addTodo(todoInput.value);
            todoInput.value = '';
        }
    });

    function addTodo(text) {
        const todo = {
            text,
            complete: false
        };
        todos.push(todo);
        renderTodos();
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');

           
            if (todo.complete) {
                todoItem.textContent = `✔️ ${todo.text}`;
            } else {
                todoItem.textContent = todo.text;
            }

            const checkButton = document.createElement('button');
            checkButton.textContent = 'Complete';
            checkButton.addEventListener('click', () => toggleComplete(todo, todoItem));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTodo(index));

            todoItem.appendChild(checkButton);
            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);
        });
    }

    function toggleComplete(todo, todoItem) {
        todo.complete = !todo.complete;
        if (todo.complete) {
            todoItem.textContent = `✔️ ${todo.text}`;
        } else {
            todoItem.textContent = todo.text;
        }

        
        const checkButton = document.createElement('button');
        checkButton.textContent = 'Complete';
        checkButton.addEventListener('click', () => toggleComplete(todo, todoItem));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todoItem));

        todoItem.appendChild(checkButton);
        todoItem.appendChild(deleteButton);
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }
});

