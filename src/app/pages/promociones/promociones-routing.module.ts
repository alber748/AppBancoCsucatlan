import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReporteComprasComponent } from './reporte-compras/reporte-compras.component';



const routes: Routes = [
    {
        path : '',
        children : [
          {
            path : '',
            component : HomeComponent
          },
          {
            path : 'reporta-tu-compra',
            component : ReporteComprasComponent
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
export class PromocionesRoutingModule { }