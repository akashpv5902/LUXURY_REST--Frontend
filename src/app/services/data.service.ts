import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  register: any;

  login:any ;

  

  constructor(private http:HttpClient) { }


  userDetails:any={
    amal:{username:"Amal",password:1000,email:"amal@apv.com"},
    anu:{username:"Anu",password:1001,email:"anu@apv.com"},
    arun:{username:"Arun",password:1002,email:"arun@apv.com"},
    sarah:{username:"Sarah",password:1003,email:"sarah@apv.com"}
  }


  regi(email:any,uname:any,pswd:any){
    const data={
      uname,
      email,
      pswd
    }
    return this.http.post('http://localhost:3003/register',data)




    
    // var userDetails = this.userDetails
    // if(uname in userDetails){
    //   return false
    // }
    // else{
    //   userDetails[uname] = {uname,password:pswd,email:email}
    //   return true
    // }
  }

  ogin(uname:any,pswd:any){
    const data={
      uname,pswd
    }
    return this.http.post('http://localhost:3003/login',data)
    
  //   var userDetails=this.userDetails
    
  //  if(uname in userDetails){
  //   if(pwd == userDetails[uname]["password"]){
  
  }

  viewmenu(){
    return this.http.get("http://localhost:3000/menu")
  }




}

