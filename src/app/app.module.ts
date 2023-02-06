import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PersonasComponent } from './pages/personas/personas.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { CuscatlanOroComponent } from './pages/cuscatlan-oro/cuscatlan-oro.component';
import { MultipremiosComponent } from './pages/multipremios/multipremios.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    EmpresaComponent,
    CuscatlanOroComponent,
    MultipremiosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
