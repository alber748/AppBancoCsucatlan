import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeCreditoComponent } from './de-credito/de-credito.component';
import { DeDebitoComponent } from './de-debito/home/de-debito.component';

const routes: Routes = [
    {
        path : '',
        children : [
          {
            path : '',
            component : HomeComponent
          },
          {
            path : 'de-credito',
            component : DeCreditoComponent
          },
          {
            path : 'debito',
            component : DeDebitoComponent
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
export class TarjetasRoutingModule { }