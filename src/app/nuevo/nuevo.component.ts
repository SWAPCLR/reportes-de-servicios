import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    var acc = document.getElementsByClassName("acordeon");
    var bc = document.getElementById("bc");
    var i: number;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
          bc.style.display = "block"
        } else {
          bc.style.display = "none"
          panel.style.display = "block";
        }
      });
    }
  }

}

 