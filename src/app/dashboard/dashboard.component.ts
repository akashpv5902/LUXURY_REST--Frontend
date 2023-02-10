import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private fb:FormBuilder){}

  bname=""
  bemail=""
  bsub=""
  bmsg=""

 

  // message model

  messageForm=this.fb.group({
    bname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    bemail:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    bsub:['',[Validators.required,Validators.pattern('[a-zA-z]*')]]

  })

  
















  book(){
    alert('clicked')
  }

}
