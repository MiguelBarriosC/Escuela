import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';


const routes: Routes = [
  { path: 'personajes', component:PersonajesComponent },
  { path: 'profesores', component:ProfesoresComponent },
  { path: 'estudiantes', component:EstudiantesComponent },
  { path: 'solicitudes', component:SolicitudesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
