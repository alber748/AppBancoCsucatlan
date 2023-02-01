import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasRoutingModule } from './tarjetas.routing.module';

import { HomeComponent } from './pages/home/home.component';
import { DeCreditoComponent } from './pages/de-credito/de-credito.component';
import { DeDebitoComponent } from './pages/de-debito/de-debito.component';
import { MaterialModule } from '../../material/material.module';
import { ComponentsModule } from "../../components/components.module";
import { ElementSwiperComponent } from './components/element-swiper/element-swiper.component';
import { FilterComponent } from './components/filter/filter.component';
import { WideCarouselComponent } from './components/wide-carousel/wide-carousel.component';
import { ImageDebitCardComponent } from './components/image-debit-card/image-debit-card.component';

import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from "swiper/angular";


@NgModule({
    declarations: [
        HomeComponent,
        DeCreditoComponent,
        DeDebitoComponent,
        ElementSwiperComponent,
        FilterComponent,
        WideCarouselComponent,
        ImageDebitCardComponent
    ],
    imports: [
        CommonModule,
        
        TarjetasRoutingModule,
        MaterialModule,
        ComponentsModule,
        SwiperModule
    ],
    exports : [
        SwiperComponent
    ]
})
export class TarjetasModule { }
