import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserModel=new UserModel();
  constructor() { }

  ngOnInit(): void {

  }

  login(form:NgForm){
    console.log(form);
     if(form.invalid){return;}
    
    console.log('Fomulario Enviado', this.user);
    //  console.log(this.user);
  }

}
