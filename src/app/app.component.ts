import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'test';

  constructor(private router:Router){}
  
  ngOnInit(){
    
  }
}
