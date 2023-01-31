import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioAlClienteComponent } from './servicio-al-cliente/servicio-al-cliente.component';
import { ContactanosComponent } from './home/contactanos.component';


const routes: Routes = [
    {
        path : '',
        children : [
          {
            path : '',
            component : ContactanosComponent
          },
          {
            path : 'servicio-al-cliente',
            component : ServicioAlClienteComponent
          },
          {
            path : '**',
            redirectTo : ''
          }
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactanosRoutingModule { }