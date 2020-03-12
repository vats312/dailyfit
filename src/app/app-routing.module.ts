import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HealthdetailsComponent } from './register/healthdetails/healthdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component:HeaderComponent},
  
  {path:'register', component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'healthdetails',component:HealthdetailsComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
