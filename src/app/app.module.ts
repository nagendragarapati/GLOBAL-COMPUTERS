import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/Header.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { DCAComponent } from './courses/dca/dca.component';
import { DtpComponent } from './courses/dtp/dtp.component';
import { PhotoshopComponent } from './courses/photoshop/photoshop.component';
import { PagemakerComponent } from './courses/pagemaker/pagemaker.component';
import { CComponent } from './courses/c/c.component';
import { JavaComponent } from './courses/java/java.component';
import { PythonComponent } from './courses/python/python.component';
import { ContactComponent } from './contact/contact.component';
import { HomesectionComponent } from './homesection/homesection.component';
import { RescourseComponent } from './rescourse/rescourse.component';
import {TallyComponent} from './courses/tally/tally.Component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CoursesComponent,
    DCAComponent,
    DtpComponent,
    PhotoshopComponent,
    PagemakerComponent,
    CComponent,
    JavaComponent,
    PythonComponent,
    ContactComponent,
    HomesectionComponent,
    RescourseComponent,
    TallyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
