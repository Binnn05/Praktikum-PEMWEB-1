export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(text, deadline = null) {
    const newTask = {
      text,
      timestamp: new Date().toISOString(),
      deadline,  // Simpan deadline yang sudah lengkap
    };
    this.tasks.push(newTask);
    this.save();
  }

  editTask(index, newText, newDeadline = null) {
    this.tasks[index].text = newText;
    this.tasks[index].deadline = newDeadline;  // Update deadline
    this.tasks[index].timestamp = new Date().toISOString(); // update waktu
    this.save();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.save();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
  
