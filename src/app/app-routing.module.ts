import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapModule',
  },
  {
    path: 'bite',
    loadChildren: './bite/bite.module#BiteModule',
  }
];
