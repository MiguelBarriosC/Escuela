import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    ProfesoresComponent,
    EstudiantesComponent,
    SolicitudesComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
