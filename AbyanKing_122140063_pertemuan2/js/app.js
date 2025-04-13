import { TaskManager } from './modules/data.js';
import { formatTime } from './modules/utils.js';

const manager = new TaskManager();

const renderTasks = async () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  
    for (const [index, task] of manager.tasks.entries()) {
      const formattedTime = await formatTime(task.timestamp);
      const formattedDeadline = task.deadline ? await formatTime(task.deadline) : "Tidak ada deadline";  
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task.text} <small>(${formattedTime})</small></span>
        <span><strong>Deadline: </strong>${formattedDeadline}</span>
        <div>
          <button class="edit" onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Hapus</button>
        </div>
      `;
      taskList.appendChild(li);
    }
  };
  
  export function initializeApp() {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const dateInput = document.getElementById('deadline-date-input');  
    const timeInput = document.getElementById('deadline-time-input');  
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      const date = dateInput.value;
      const time = timeInput.value;
  
      let deadline = null;
      if (date && time) {
        deadline = new Date(`${date}T${time}:00`).toISOString();
      }
  
      if (text) {
        manager.addTask(text, deadline);
        input.value = '';
        dateInput.value = '';
        timeInput.value = '';  
        renderTasks();
      }
    });
  
    renderTasks();
    }

  window.editTask = (index) => {
    const newText = prompt("Edit tugas:", manager.tasks[index].text);
    if (newText) {
      manager.editTask(index, newText);
      renderTasks();
    }
  };

  window.deleteTask = (index) => {
    manager.removeTask(index);
    renderTasks();
  };

