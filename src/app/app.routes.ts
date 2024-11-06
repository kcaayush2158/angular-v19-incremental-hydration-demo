import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: 'crisis-list', loadComponent: () => import('./crisis-list/crisis-list.component') },
  { path: 'heroes-list', loadComponent: () => import('../app/hero-list/hero-list.component') },
  { path: '', loadComponent: () => import('./home/home.component') },

];
