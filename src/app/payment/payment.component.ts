import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private router:Router){}

  pay(){
    alert("Payment Completed")
    this.router.navigateByUrl('pyc')

  }

}
