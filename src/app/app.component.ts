import { Component,OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reportes-servicios';
  

  constructor(private http:HttpClient){

  }
  ngOnInit(): void{

    this.http.get('https://github.com/SWAPCLR/reportes-de-servicios.git').subscribe
    (data =>{
      console.log(data);
    });

  }
}
