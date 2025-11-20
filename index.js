// index.js
import { tareas } from './data.js';

// Crear un ID único
const newId = () => Math.random().toString(36).slice(2);

// 1️⃣ Agregar tarea
export const add = (list, titulo) => {
  const nuevaTarea = { id: newId(), titulo, hecho: false };
  return [...list, nuevaTarea];
};

// 2️⃣ Cambiar estado de tarea
export const toggle = (list, id) => {
  return list.map(tarea =>
    tarea.id === id ? { ...tarea, hecho: !tarea.hecho } : tarea
  );
};

// 3️⃣ Eliminar tarea
export const remove = (list, id) => {
  return list.filter(tarea => tarea.id !== id);
};

// 4️⃣ Filtrar tareas
export const filterBy = (list, estado) => {
  switch (estado) {
    case "done":
      return list.filter(t => t.hecho);
    case "todo":
      return list.filter(t => !t.hecho);
    case "all":
    default:
      return [...list]; // copia inmutable
  }
};
