import { Routes } from '@angular/router';

import { AuthCanActivate } from './core/guards';
import { LoginCanActivate } from './login/guards/login.can-activate';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthCanActivate]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoginCanActivate]
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapModule',
    canActivate: [AuthCanActivate]
  },
  {
    path: 'bite',
    loadChildren: './bite/bite.module#BiteModule',
    canActivate: [AuthCanActivate]
  }
];
