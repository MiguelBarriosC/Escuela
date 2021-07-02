import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../services/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private solicitudesService:SolicitudesService) { }

  students:any[];

  ngOnInit(): void {
    this.students = this.solicitudesService.getLocalStudents();
  }

}
