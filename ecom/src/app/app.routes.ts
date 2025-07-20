import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:SignupComponent},
    {path:"about",component:AboutusComponent},
    {path:"contact",component:ContactusComponent},
    {path:"order",component:OrderComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }