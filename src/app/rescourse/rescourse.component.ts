import { Component, OnInit } from '@angular/core';
declare const nagendra:any;

@Component({
  selector: 'app-rescourse',
  templateUrl: './rescourse.component.html',
  styleUrls: ['./rescourse.component.css']
})
export class RescourseComponent implements OnInit {

  callfun(){
    nagendra();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
