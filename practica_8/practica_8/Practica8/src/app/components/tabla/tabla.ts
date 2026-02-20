import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Eventos } from '../../services/eventos';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tabla.html'
})
export class Tabla implements OnInit {

  eventosLista: any[] = [];

  constructor(
    private eventosService: Eventos,
    private cdr: ChangeDetectorRef   
  ) {}

  ngOnInit() {
    this.eventosService.obtenerEventos()
      .subscribe((data: any[]) => {
        console.log("Datos recibidos:", data);
        this.eventosLista = data;
        this.cdr.detectChanges();   
      });
  }
}