import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})
export class ConsultaComponent implements OnInit {

  listalumnos: any[] = [];

  constructor(private alumnos: Alumnos) {}

  ngOnInit(): void {

    this.cargarAlumnos();

    // 👇 Escuchar si hay actualización
    this.alumnos.alumnosActualizados$.subscribe(() => {
      this.cargarAlumnos();
    });
  }

  cargarAlumnos() {
    this.alumnos.obtenerAlumnos().subscribe(data => {
      this.listalumnos = data;
    });
  }
}