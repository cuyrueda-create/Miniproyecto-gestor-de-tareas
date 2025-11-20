// main.js
import { tareas as listaInicial } from './data.js';
import { add, toggle, remove, filterBy } from './index.js';
import { contarHechas, contarPendientes, porcentajeHecho } from './stats.js';

// Empezamos con la lista inicial
let tareas = [...listaInicial];

console.log("Tareas iniciales:", tareas);

// Agregamos una nueva tarea
tareas = add(tareas, "Leer un libro");
console.log("Después de agregar:", tareas);

// Cambiamos el estado de la primera tarea
tareas = toggle(tareas, tareas[0].id);
console.log("Después de toggle:", tareas);

// Eliminamos la segunda tarea
tareas = remove(tareas, tareas[1].id);
console.log("Después de eliminar:", tareas);

// Filtramos tareas hechas
const hechas = filterBy(tareas, "done");
console.log("Tareas hechas:", hechas);

// Estadísticas
console.log("Tareas completadas:", contarHechas(tareas));
console.log("Tareas pendientes:", contarPendientes(tareas));
console.log("Porcentaje completado:", porcentajeHecho(tareas).toFixed(2) + "%");
