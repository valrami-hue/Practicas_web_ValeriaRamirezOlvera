
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './contacto/contacto';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})
export class App {
  protected readonly title = signal('practica6');
}
