import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  user:UserModel
  constructor(private auth:AuthService) { 
    
  }

  ngOnInit(): void {
    this.user=new UserModel();
    this.user.email="1bmanuelbeltran@gmail.com";
  }
  onSubmit(form:NgForm)
   {
     if(form.invalid)     {return;}
     this.auth.newUser(this.user).subscribe(res=>{
        console.log(res);

     },(err)=>{
       console.log(err.error.error.message);
     });
     
   }

}
