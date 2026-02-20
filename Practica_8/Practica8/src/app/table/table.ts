import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eventos } from '../services/eventos';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Tabla implements OnInit {

  eventosLista: any[] = [];

  constructor(private eventos: Eventos) {}

  ngOnInit() {
    this.eventos.obtenerEventos().subscribe(data => {
      this.eventosLista = data as any[];
    });
  }

}