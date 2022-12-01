import { FormularioReactiveModule } from './formulario-reactive/formulario-reactive.module';
import { FormularioTemplateModule } from './formulario-template/formulario-template.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioTemplateModule,
    FormularioReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
