import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { ButtonNormalComponent } from './button-normal/button-normal.component';
import { RouterModule } from '@angular/router';
import { SwiperHomeComponent } from './swiper-home/swiper-home.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { BtnDownloadComponent } from './btn-download/btn-download.component';




@NgModule({
  declarations: [
    HeaderComponent,
    ButtonNormalComponent,
    SwiperHomeComponent,
    ModalHeaderComponent,
    BtnDownloadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    ButtonNormalComponent,
    SwiperHomeComponent
  ]
})
export class ComponentsModule { }
