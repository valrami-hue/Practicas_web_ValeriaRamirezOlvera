import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  constructor(
    private alumno: Alumnos,
    private router: Router
  ) {}

  guardarAlumno(form: NgForm) {

    if (form.invalid) return;

    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera
    };

    this.alumno.agregarAlumno(nuevoAlumno).subscribe({
      next: () => {

        alert("Alumno guardado correctamente");

        form.reset();

        this.alumno.notificarActualizacion();

        this.router.navigate(['/consulta']);

      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }


  soloLetras(event: KeyboardEvent) {

    const tecla = event.key;
    const patron = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]$/;

    if (!patron.test(tecla)) {
      event.preventDefault();
    }

  }


  soloNumeros(event: KeyboardEvent) {

    const tecla = event.key;
    const patron = /^[0-9]$/;

    if (!patron.test(tecla)) {
      event.preventDefault();
    }

  }

}