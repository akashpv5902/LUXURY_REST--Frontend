import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email="";
  uname="";
  pswd="";

  // register model
  registerForm=this.fb.group({
    email:['',[Validators.required]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-z]*')]]

  })

  constructor(private rfm:ReactiveFormsModule ,private router:Router,private fb:FormBuilder,private ds:DataService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

register(){
  // alert('clicked')

  console.log(this);


  var email=this.registerForm.value.email;
  var uname=this.registerForm.value.uname;
  var pswd=this.registerForm.value.pswd;

  if(this.registerForm.valid){

    this.ds.register(email,uname,pswd)
    .subscribe((result:any)=>{
      alert(result.message);
      // this.router.navigateByUrl('')
    },
      (result: any)=>{
        alert(result.error.message)
      
    })


  }else{
    alert('invalid form')
  }

  
}

}
