# SistemaGestionTareas
Sistema de Gestion de Tareas que permite agregar, listar y eliminar las tareas ingresadas por el usuario.

Para iniciar el programa ejecute

  npm start
  
Sistema de Gestión de Tareas - Descripción de Funcionalidad

El Sistema de Gestión de Tareas es una aplicación desarrollada en Node.js y JavaScript que permite a los usuarios gestionar sus tareas pendientes de manera eficiente. La aplicación ofrece una interfaz de línea de comandos que facilita la interacción con las siguientes funcionalidades:

Agregar Tarea:
Los usuarios pueden agregar nuevas tareas a la lista de tareas pendientes. Cada tarea se define mediante una descripción proporcionada por el usuario. Una vez agregada, la tarea se guarda en un repositorio y se marca automáticamente como "Pendiente".

Eliminar Tarea:
Los usuarios tienen la capacidad de eliminar tareas específicas de la lista. Esto se logra al proporcionar el índice de la tarea que desean eliminar. La aplicación valida la entrada y asegura que el índice sea válido antes de realizar la eliminación.

Listar Tareas:
La aplicación permite a los usuarios ver una lista numerada de todas las tareas pendientes. Cada tarea se muestra con su estado actual (Pendiente, En proceso o Finalizado) y su descripción asociada.

Cambiar Estado de Tarea:
Los usuarios pueden actualizar el estado de una tarea para reflejar su progreso. Las tareas pueden tener uno de tres estados: "Pendiente", "En proceso" o "Finalizado". Al proporcionar el índice de la tarea y el nuevo estado deseado, la aplicación actualiza el estado de la tarea correspondiente en el repositorio.

Manejo de Errores y Validación de Entrada:
La aplicación incorpora un manejo robusto de errores y validación de entrada para garantizar una experiencia de usuario sin problemas. Si los usuarios proporcionan índices inválidos, estados no reconocidos o cualquier otra entrada incorrecta, la aplicación mostrará mensajes de error claros y los guiará a proporcionar información válida.

Almacenamiento de Tareas:
Las tareas se almacenan en un archivo tasks.json, que actúa como un repositorio de tareas. Esto permite que los datos persistan entre sesiones de uso y se mantenga un registro de las tareas a lo largo del tiempo.

El Sistema de Gestión de Tareas proporciona una manera efectiva de registrar, organizar y hacer un seguimiento del trabajo pendiente. Con una interfaz intuitiva y características sólidas de manejo de datos, los usuarios pueden administrar sus tareas de manera eficiente y productiva.
