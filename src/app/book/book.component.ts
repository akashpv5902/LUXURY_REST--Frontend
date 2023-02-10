import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private fb:FormBuilder ,private router:Router){}

  rname=""
  remail=""
  rphone=""
  rdate=""
  rtime=""




  reserveForm=this.fb.group({
    rname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    remail:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    rphone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    rdate:['',[Validators.required,Validators.pattern('[0-9]*')]],
    rtime:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  booking(){
    // if(this.reserveForm.valid){
      // alert("Reserved")
      this.router.navigateByUrl('payment')

 
  // }
  // else{
  //   alert("Invalid Form")
  // }
}

}
