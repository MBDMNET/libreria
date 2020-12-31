import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/user.models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserModel=new UserModel();
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

  login(form:NgForm){
    
     if(form.invalid){return;}
      this.auth.login(this.user).subscribe(res =>{
        console.log(res);

      },(err)=>{console.log(err.error.error.message)});
  
    //  console.log(this.user);
  }

}
