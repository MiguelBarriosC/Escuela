import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  configUrl = 'http://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http:HttpClient, private processHTTPMsgService:ProcessHttpmsgService) { }

  getProfesores():Observable<any>{
    return this.http.get(this.configUrl)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)))
  }
}
