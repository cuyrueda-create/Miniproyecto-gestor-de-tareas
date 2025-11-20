// stats.js

export const contarHechas = list => list.filter(t => t.hecho).length;
export const contarPendientes = list => list.filter(t => !t.hecho).length;
export const porcentajeHecho = list =>
  list.length === 0 ? 0 : (contarHechas(list) / list.length) * 100;
