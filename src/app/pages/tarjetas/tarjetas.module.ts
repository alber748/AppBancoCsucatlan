import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasRoutingModule } from './tarjetas.routing.module';

import { HomeComponent } from './home/home.component';
import { DeCreditoComponent } from './de-credito/de-credito.component';
import { DeDebitoComponent } from './de-debito/home/de-debito.component';
import { MaterialModule } from '../../material/material.module';
import { ComponentsModule } from "../../components/components.module";
import { ElementSwiperComponent } from './components/element-swiper/element-swiper.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
    declarations: [
        HomeComponent,
        DeCreditoComponent,
        DeDebitoComponent,
        ElementSwiperComponent,
        FilterComponent
    ],
    imports: [
        CommonModule,
        
        TarjetasRoutingModule,
        MaterialModule,
        ComponentsModule
    ]
})
export class TarjetasModule { }
