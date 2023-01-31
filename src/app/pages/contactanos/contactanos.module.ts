import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosRoutingModule } from './contactanos-routing.module';
import { AcordeonAttentionEfficiencyComponent } from './components/acordeon-attention-efficiency/acordeon-attention-efficiency.component';
import { ServicioAlClienteComponent } from './servicio-al-cliente/servicio-al-cliente.component';
import { ContactanosComponent } from './home/contactanos.component';
import { MaterialModule } from '../../material/material.module';
import { TableAcordeon2Component } from './components/acordeon-attention-efficiency/table-acordeon2/table-acordeon2.component';
import { TableAcordeon3Component } from './components/acordeon-attention-efficiency/table-acordeon3/table-acordeon3.component';
import { TitleBubblesComponent } from './components/title-bubbles/title-bubbles.component';
import { TableAcordeon1Component } from './components/acordeon-attention-efficiency/table-acordeon1/table-acordeon1.component';



@NgModule({
  declarations: [
    AcordeonAttentionEfficiencyComponent,
    ServicioAlClienteComponent,
    ContactanosComponent,

    TableAcordeon1Component,
    TableAcordeon2Component,
    TableAcordeon3Component,
    TitleBubblesComponent
  ],
  imports: [
    CommonModule,
    ContactanosRoutingModule,
    MaterialModule
  ]
})
export class ContactanosModule { }
