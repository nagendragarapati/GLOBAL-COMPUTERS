import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { DCAComponent } from './courses/dca/dca.component';
import { DtpComponent } from './courses/dtp/dtp.component';
import {TallyComponent} from './courses/tally/tally.Component';
import { PhotoshopComponent } from './courses/photoshop/photoshop.component';
import { PagemakerComponent } from './courses/pagemaker/pagemaker.component';
import { CComponent } from './courses/c/c.component';
import { JavaComponent } from './courses/java/java.component';
import { PythonComponent } from './courses/python/python.component';



const routes: Routes = [
  {path:"", redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Login', component:LoginComponent},
  
  {path:'Courses', component:CoursesComponent,
  children:[
    {path:'Dca', component:DCAComponent},
    {path:"", redirectTo:'Dca' , pathMatch:'full'},
    {path:'Dtp', component:DtpComponent},
    {path:'Tally', component:TallyComponent},
    {path:'Photoshop', component:PhotoshopComponent},
    {path:'C', component:CComponent},
    {path:'Java', component:JavaComponent},
    {path:'Python', component:PythonComponent},
    {path:'Pagemaker', component:PagemakerComponent},

    

]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
