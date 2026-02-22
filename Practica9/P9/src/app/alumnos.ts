import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Alumnos {

  private apiURL = "http://localhost:5000/alumnos";

  private alumnosActualizados = new BehaviorSubject<boolean>(false);
  alumnosActualizados$ = this.alumnosActualizados.asObservable();

  constructor(private http: HttpClient) {}

  obtenerAlumnos() {
    return this.http.get<any[]>(this.apiURL);
  }

  agregarAlumno(alumno: any) {
    return this.http.post(this.apiURL, alumno);
  }

  notificarActualizacion() {
    this.alumnosActualizados.next(true);
  }
}