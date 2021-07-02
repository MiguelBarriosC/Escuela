import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnDestroy {

  constructor(private personajesService:PersonajesService) { }

  public casas = ['slytherin','gryffindor', 'ravenclaw', 'hufflepuff']
  date:number = new Date().getFullYear();
  errMess: string;
  subsPersonajes:Subscription;
  personajes:any[];

  ngOnInit(): void {
    
  }
  selectChange(value:any){
    this.subsPersonajes = this.personajesService.getPersonajesByHouse(value)
      .subscribe( personajes => this.personajes = personajes
        ,errmess => this.errMess = <any>errmess);
  }
  ngOnDestroy(){
    if (this.subsPersonajes) this.subsPersonajes.unsubscribe();
  }
}
