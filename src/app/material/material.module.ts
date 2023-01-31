import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'; 
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class MaterialModule { }
