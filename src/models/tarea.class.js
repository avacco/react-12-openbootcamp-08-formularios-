import { NIVEL } from "./niveles.enum";

export class Tarea {
  titulo = '';
  descripcion = '';
  nivel = NIVEL.NORMAL;

  constructor(titulo, descripcion, nivel){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.nivel = nivel;
  }


}

