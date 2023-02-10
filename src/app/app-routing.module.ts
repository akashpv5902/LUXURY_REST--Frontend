import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { PycComponent } from './pyc/pyc.component';
import { RegisterComponent } from './register/register.component';
import { SamplevComponent } from './samplev/samplev.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent },
  {path:'book' , component:BookComponent},
  {path:'menu', component:MenuComponent},
  {path:'samplev', component:SamplevComponent},
  {path:'payment',component:PaymentComponent},
  {path:'pyc',component:PycComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
