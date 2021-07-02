import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private configUrl = 'http://hp-api.herokuapp.com/api/characters/students';

  constructor(private http:HttpClient, private processHTTPMsgService:ProcessHttpmsgService) { }

  getStudents():Observable<any>{
    return this.http.get(this.configUrl)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)))
  }
}
