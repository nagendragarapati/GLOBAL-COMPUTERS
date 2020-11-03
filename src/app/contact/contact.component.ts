import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform:FormGroup;



  constructor(
    private fb:FormBuilder,

  ) { }

  ngOnInit(): void {

    this.contactform=this.fb.group({
      name:[null, [Validators.required,Validators.minLength(3)]],
    });
  
  }

  Form(formData:NgForm){
    console.log(formData);
  }




}
