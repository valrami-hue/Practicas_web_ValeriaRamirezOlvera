import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


export const routes: Routes = [{ path: '', component: ContactoComponent}];



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
