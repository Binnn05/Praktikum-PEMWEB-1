document.addEventListener("DOMContentLoaded", function () {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("todo-list");
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("date");
    const addTaskButton = document.getElementById("add-task");

    function renderTodos() {
        todoList.innerHTML = "";
        const today = new Date().toISOString().split("T")[0];

        todos.forEach((todo, index) => {
            let li = document.createElement("li");
            li.className = `list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : todo.date < today ? 'overdue' : ''}`;
            
            li.innerHTML = `
                <span class="${todo.completed ? 'text-decoration-line-through' : ''}">
                    ${todo.text} - <small>${todo.date}</small>
                </span>
                <div>
                    <button class="btn btn-success btn-sm me-2" onclick="toggleTodo(${index})">✓</button>
                    <button class="btn btn-danger btn-sm" onclick="removeTodo(${index})">✗</button>
                </div>
            `;
            todoList.appendChild(li);
        });

        localStorage.setItem("todos", JSON.stringify(todos));
    }

    addTaskButton.addEventListener("click", function () {
        if (taskInput.value && dateInput.value) {
            todos.push({ text: taskInput.value, date: dateInput.value, completed: false });
            taskInput.value = "";
            dateInput.value = "";
            renderTodos();
        }
    });

    window.toggleTodo = function (index) {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    };

    window.removeTodo = function (index) {
        todos.splice(index, 1);
        renderTodos();
    };

    renderTodos();
});
