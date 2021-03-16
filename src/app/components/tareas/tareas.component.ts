import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() {
    this.cargarStorage();
  }

  ngOnInit(): void {}

  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };

    this.listaTareas.push(tarea);
    this.guardarStorage();

    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);
    this.guardarStorage();
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listaTareas[index].estado = !tarea.estado;
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listaTareas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listaTareas = JSON.parse(localStorage.getItem('data') || '{}');
    } else {
      this.listaTareas = [];
    }
  }
}
