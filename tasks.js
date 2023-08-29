// tasks.js

const fs = require('fs');

const tasksFilePath = './tasks.json';

function loadTasks() {
  try {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

function addTask(taskDescription) {
  const tasks = loadTasks();
  tasks.push({ description: taskDescription, status: 'Pendiente' });
  saveTasks(tasks);
}

function removeTask(taskIndex) {
  const tasks = loadTasks();
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
  } else {
    throw new Error('Índice de tarea inválido');
  }
}

function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('No hay tareas pendientes.');
  } else {
    console.log('===== Tareas Pendientes =====');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.status}] - ${task.description}`);
    });
  }
}

function updateTaskStatus(taskIndex, newStatus) {
  const validStatuses = ['Pendiente', 'En proceso', 'Finalizado'];
  if (!validStatuses.includes(newStatus)) {
    throw new Error('Estado de tarea inválido');
  }

  const tasks = loadTasks();
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].status = newStatus;
    saveTasks(tasks);
  } else {
    throw new Error('Índice de tarea inválido');
  }
}

module.exports = {
  addTask,
  removeTask,
  listTasks,
  updateTaskStatus,
};
