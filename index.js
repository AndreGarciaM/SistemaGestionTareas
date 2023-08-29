// index.js
console.log("test")

const readline = require('readline');
const { addTask, removeTask, listTasks, updateTaskStatus } = require('./tasks');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log('===== Sistema de Gestión de Tareas =====');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Listar tareas');
  console.log('4. Cambiar estado de tarea');
  console.log('5. Salir');
}

function getUserInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  let shouldExit = false;

  while (!shouldExit) {
    displayMenu();
    const choice = await getUserInput('Seleccione una opción: ');

    switch (choice) {
      case '1':
        const newTask = await getUserInput('Ingrese la descripción de la tarea: ');
        addTask(newTask);
        console.log('Tarea agregada.');
        break;
      case '2':
        try {
          const taskIndex = parseInt(await getUserInput('Ingrese el índice de la tarea a eliminar: ')) - 1;
          removeTask(taskIndex);
          console.log('Tarea eliminada.');
        } catch (error) {
          console.error(error.message);
        }
        break;
      case '3':
        listTasks();
        break;
      case '4':
        try {
          const taskToUpdate = parseInt(await getUserInput('Ingrese el índice de la tarea a actualizar: ')) - 1;
          const newStatus = await getUserInput('Ingrese el nuevo estado de la tarea (Pendiente, En proceso, Finalizado): ');
          updateTaskStatus(taskToUpdate, newStatus);
          console.log('Estado de tarea actualizado.');
        } catch (error) {
          console.error(error.message);
        }
        break;
      case '5':
        shouldExit = true;
        console.log('¡Hasta luego!');
        rl.close();
        break;
      default:
        console.log('Opción inválida. Intente nuevamente.');
        break;
    }
  }
}

main();
