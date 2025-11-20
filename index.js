import { tareasData } from './data.js';
import { contarHechas, contarPendientes, porcentajeHecho } from './stats.js';
import readline from 'readline';

// Crear ID único
const newId = () => Math.random().toString(36).slice(2);

// Funciones puras
const add = (list, titulo) => [...list, { id: newId(), titulo, hecho: false }];
const toggle = (list, id) =>
  list.map(tarea => (tarea.id === id ? { ...tarea, hecho: !tarea.hecho } : tarea));
const remove = (list, id) => list.filter(tarea => tarea.id !== id);

// Función principal que maneja el switch
const gestionarTareas = (list, accion, payload) => {
  switch (accion) {
    case "add":
      return add(list, payload.titulo);
    case "toggle":
      return toggle(list, payload.id);
    case "remove":
      return remove(list, payload.id);
    default:
      console.log("Acción no válida");
      return list;
  }
};

// ============================
// EJECUCIÓN INTERACTIVA
// ============================

// Declarar tareas solo UNA VEZ
let tareas = [...tareasData.tareas];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mostrarMenu = () => {
  console.log("\n--- MENÚ DE TAREAS ---");
  console.log("1. Ver tareas");
  console.log("2. Agregar tarea");
  console.log("3. Cambiar estado de tarea (toggle)");
  console.log("4. Eliminar tarea");
  console.log("5. Ver estadísticas");
  console.log("0. Salir");
};

const preguntar = () => {
  mostrarMenu();
  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        console.table(tareas);
        break;
      case "2":
        rl.question("Título de la nueva tarea: ", (titulo) => {
          tareas = gestionarTareas(tareas, "add", { titulo });
          console.log("Tarea agregada.");
          preguntar();
        });
        return;
      case "3":
        rl.question("ID de la tarea a cambiar estado: ", (id) => {
          tareas = gestionarTareas(tareas, "toggle", { id });
          console.log("Estado cambiado.");
          preguntar();
        });
        return;
      case "4":
        rl.question("ID de la tarea a eliminar: ", (id) => {
          tareas = gestionarTareas(tareas, "remove", { id });
          console.log("Tarea eliminada.");
          preguntar();
        });
        return;
      case "5":
        console.log("Hechas:", contarHechas(tareas));
        console.log("Pendientes:", contarPendientes(tareas));
        console.log("Porcentaje completado:", porcentajeHecho(tareas).toFixed(2) + "%");
        break;
      case "0":
        rl.close();
        return;
      default:
        console.log("Opción no válida");
    }
    preguntar();
  });
};

preguntar();

