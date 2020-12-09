import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { FirstComponent } from "./first/first.component";
import { SonOfFirstComponent } from './first/son-of-first/son-of-first.component';
import { FormsComponent } from './forms/forms.component';
import { AddComponent } from './hiring-cv/add/add.component';
import { DetailPersonComponent } from './hiring-cv/detail-person/detail-person.component';
import { LoginGuard } from './hiring-cv/guards/login.guard';
import { NotLoggedGuard } from './hiring-cv/guards/not-logged.guard';
import { HiringCvComponent } from './hiring-cv/hiring-cv.component';
import { SecondComponent } from "./second/second.component";
import { SonOfSecondComponent } from './second/son-of-second/son-of-second.component';


const routes: Routes = [
  {path:"first", component: FirstComponent,
    children: [{path: "sonoffirst", component: SonOfFirstComponent}]
},
  {path:"second", component: SecondComponent,
    children: [{path:"sonofsecond", component: SonOfSecondComponent}]
},
  {path: "color/:color", component: ColorComponent},
  {path: "hiringcv", children : [
    {path:"", component: HiringCvComponent},
    {path:"add", component: AddComponent, canActivate : [LoginGuard]},
    {path:":id", component: DetailPersonComponent}
  ]},
  {path:"forms", component: FormsComponent, canActivate: [NotLoggedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
