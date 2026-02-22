import { Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
  { path: '', component: Formulario },        // ← principal
  { path: 'consulta', component: ConsultaComponent }
];