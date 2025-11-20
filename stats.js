// stats.js

// Contar tareas completadas
export const contarHechas = (list) => list.filter(t => t.hecho).length;

// Contar tareas pendientes
export const contarPendientes = (list) => list.filter(t => !t.hecho).length;

// Porcentaje de tareas completadas
export const porcentajeHecho = (list) => {
  if (list.length === 0) return 0;
  return (contarHechas(list) / list.length) * 100;
};
