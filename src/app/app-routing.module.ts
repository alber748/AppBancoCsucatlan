import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { CuscatlanOroComponent } from './pages/cuscatlan-oro/cuscatlan-oro.component';
import { MultipremiosComponent } from './pages/multipremios/multipremios.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
      path : 'tarjetas',
      loadChildren : () => import( './pages/tarjetas/tarjetas.module' ).then( t => t.TarjetasModule )  
  },
  {
    path: 'empresa',
    component : EmpresaComponent
  },
  {
    path: 'promociones',
    loadChildren : () => import( './pages/promociones/promociones.module' ).then( p => p.PromocionesModule )
  },
  {
    path: 'cuscatlan-oro',
    component : CuscatlanOroComponent
  },
  {
    path: 'multipremios',
    component : MultipremiosComponent
  },
  {
    path: 'contactanos',
    loadChildren : () => import( './pages/contactanos/contactanos.module' ).then( c => c.ContactanosModule )  
  },
  {
      path : '**',
      redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
