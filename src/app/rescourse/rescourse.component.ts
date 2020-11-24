import { Component, OnInit } from '@angular/core';
declare const scroll:any;

@Component({
  selector: 'app-rescourse',
  templateUrl: './rescourse.component.html',
  styleUrls: ['./rescourse.component.css']
})
export class RescourseComponent implements OnInit {

  callfun(){
    scroll();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
