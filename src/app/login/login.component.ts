import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uname="";
  pswd="";


  // register model
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-z]*')]]

  })

  
  constructor(private rfm:ReactiveFormsModule ,private router:Router,private fb:FormBuilder,private ds:DataService) { }


  userDetails:any={
    amal:{username:"Amal",password:1000},
    anu:{username:"Anu",password:1001},
    arun:{username:"Arun",password:1002},
    sarah:{username:"Sarah",password:1003}
  }





  bogin(){
    console.log(this);

    var uname=this.registerForm.value.uname;
    var pswd=this.registerForm.value.pswd;
    // var userDetails=this.userDetails

  

    if(this.registerForm.valid){

      this.ds.login(uname,pswd)
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

  unameChange(event:any){
    this.uname=event.target.value
    console.log(this.uname);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  login(){
    var uname=this.uname 
    
    var pwd=this.pswd
    var userDetails=this.userDetails
    
   if(uname in userDetails){
    if(pwd == userDetails[uname]["password"]){
      alert('login successfull')

      this.router.navigateByUrl('dashboard')

    }else
    {
      alert('invalid password')
    }

   }else{
    alert('invalid username')
   }
    
  }

}