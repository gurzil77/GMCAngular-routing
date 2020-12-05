import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { ColorComponent } from './color/color.component';
import { SonOfFirstComponent } from './first/son-of-first/son-of-first.component';
import { SonOfSecondComponent } from './second/son-of-second/son-of-second.component';
import { HiringCvComponent } from './hiring-cv/hiring-cv.component';
import { EmbaucheComponent } from './hiring-cv/embauche/embauche.component';
import {CvComponent} from './hiring-cv/cv/cv.component'
import {ListComponent} from './hiring-cv/cv/list/list.component'
import {DetailComponent} from './hiring-cv/cv/detail/detail.component'
import {ItemComponent} from './hiring-cv/cv/item/item.component';
import { HeaderSecondComponent } from './hiring-cv/header/header.second.component';
import { DetailPersonComponent } from './hiring-cv/detail-person/detail-person.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './hiring-cv/add/add.component'
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    ColorComponent,
    SonOfFirstComponent,
    SonOfSecondComponent,
    HiringCvComponent,
    EmbaucheComponent,
    CvComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    HeaderSecondComponent,
    DetailPersonComponent,
    FormsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
