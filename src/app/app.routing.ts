// Importar los modulos del Router de Angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

// Importar componentes
import {HomeComponent} from './home/home.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import {CursosComponent} from './cursos/cursos.component';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';

// Array de rutas
const APP_ROUTES: Routes = [
   {path: ''                         , component: HomeComponent},
   {path: 'home'                     , component: HomeComponent}, //Es recomendable crear una ruta alternativa para el home, esta es la ruta que se utilizaria para que funcione bien la directiva routerLinkActive
   {path: 'videojuego'               , component: VideojuegoComponent},
   {path: 'zapatillas'               , component: ZapatillasComponent},
   {path: 'cursos'                   , component: CursosComponent},
   {path: 'cursos/:nombre'           , component: CursosComponent},
   {path: 'cursos/:nombre/:followers', component: CursosComponent},
   {path: 'externo'                  , component: ExternoComponent},
   {path: 'contacto'                 , component: ContactoComponent},
   {path: '**'                       , component: HomeComponent}
];

// Exportar el modulo del router
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);