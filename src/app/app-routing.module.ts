import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importing components to be used as routes

import { LoginComponent } from './logins/login/login.component';
import { FirstComponent } from './first/first/first.component';


const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'LoginComponent', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
