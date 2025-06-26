import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'cadastro-noticia',
    loadComponent: () => import('./pages/cadastro-noticia/cadastro-noticia.page').then( m => m.CadastroNoticiaPage)
  },

];
