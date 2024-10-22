import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

export const routes: Routes = [
    {
        path:'listado',
        component:ListaUsuariosComponent
    },
    {
        path:'crear',
        component:CrearUsuarioComponent
    }
];
