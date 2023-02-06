import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReporteComprasComponent } from './reporte-compras/reporte-compras.component';
import { PromocionesRoutingModule } from './promociones-routing.module';
import { HomePromotionsCarouselComponent } from './components/home-promotions-carousel/home-promotions-carousel.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    ReporteComprasComponent,
    HomePromotionsCarouselComponent,
  ],
  imports: [
    CommonModule,
    PromocionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class PromocionesModule { }
