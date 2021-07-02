import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }

  private configUrl = 'http://hp-api.herokuapp.com/api/characters/house/';
  
  getPersonajesByHouse(house:string):Observable<any>{
    return this.http.get(this.configUrl + house)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)))
  }
}
