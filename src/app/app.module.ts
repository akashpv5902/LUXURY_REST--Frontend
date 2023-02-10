import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';
import { SamplevComponent } from './samplev/samplev.component';
import { PaymentComponent } from './payment/payment.component';
import { PycComponent } from './pyc/pyc.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    MenuComponent,
    SamplevComponent,
    PaymentComponent,
    PycComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //import here
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
