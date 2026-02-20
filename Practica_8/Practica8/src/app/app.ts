import { Component } from '@angular/core';
import { Tabla } from './table/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Tabla],
  template: `<app-tabla></app-tabla>`
})
export class App {
}