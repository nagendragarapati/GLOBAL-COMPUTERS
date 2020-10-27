import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
declare const login:any;
declare const register:any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform:FormGroup;
  Signupform:FormGroup;


  callfunone(){
    login();
  };

  callfuntwo(){
    register();
  };

 

  constructor(    private fb:FormBuilder,
    ) {
   }

  ngOnInit(): void {
    this.Loginform=this.fb.group({
      'username':[null, [Validators.required,Validators.minLength(3)]],
      'password':[null, [Validators.required,Validators.minLength(6)] ],
    });

    this.Signupform=this.fb.group({
      username:[null, [Validators.required,Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required,Validators.minLength(6)]],


    });

  }
  Login(formData:NgForm){
    console.log(formData);
  }

  Signup(formData:NgForm){
    console.log(formData);
  }


  }


