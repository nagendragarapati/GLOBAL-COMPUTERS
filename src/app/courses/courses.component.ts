import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  activetab = "Dca";
  
  constructor() { }

  ngOnInit(): void {
  }

  
  getActiveTab(tabname:string){
    this.activetab = tabname;
  }

}



