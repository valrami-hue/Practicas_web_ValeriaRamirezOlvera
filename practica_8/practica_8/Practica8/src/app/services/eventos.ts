import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Eventos {
  private API = 'http://127.0.0.1:5000/eventos';

  constructor(private http: HttpClient) {}

 obtenerEventos() {
  return this.http.get<any[]>(this.API);
}
}
