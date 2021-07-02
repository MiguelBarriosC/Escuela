import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfesorService } from '../services/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit, OnDestroy {

  constructor(private profesorService:ProfesorService) { }
  errMsg:string;
  subsProfesores:Subscription;
  profesores:any[];
  date = new Date().getFullYear();
  ngOnInit(): void {
    this.subsProfesores = this.profesorService.getProfesores()
    .subscribe(profesores => this.profesores = profesores,
      errmsg => this.errMsg = errmsg)
  }
  ngOnDestroy(){
    this.subsProfesores.unsubscribe();
  }
}
