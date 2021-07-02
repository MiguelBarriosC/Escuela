import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstudianteService } from '../services/estudiante.service';
import { SolicitudesService } from '../services/solicitudes.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, OnDestroy {

  constructor(private estudianteService:EstudianteService, private solicitudesService:SolicitudesService, private router:Router) { }

  public casas = ['slytherin','gryffindor', 'ravenclaw', 'hufflepuff'];
  date:number =  new Date().getFullYear();
  errMsg:string;
  estudianteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    especie: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    casa: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required)
  })
  subsEstudiantes:Subscription;
  public estudiantes:any[];

  ngOnInit(): void {
    this.subsEstudiantes = this.estudianteService.getStudents()
    .subscribe( estudiantes => this.estudiantes = estudiantes
      ,errmsg => this.errMsg = errmsg);
  }
  estFormOnSubmit(){
    this.solicitudesService.addStudent(this.estudianteForm.value);
    this.redirectToSolicitudes();
  }
  redirectToSolicitudes(){
    this.router.navigate(['solicitudes']);   
  }
  ngOnDestroy(){
    this.subsEstudiantes.unsubscribe();
  }
}
