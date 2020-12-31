import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.models';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  user:UserModel
  constructor() { 
    
  }

  ngOnInit(): void {
    this.user=new UserModel();
    this.user.email="1bmanuelbeltran@gmail.com";
  }
  onSubmit(form:NgForm)
   {
     if(form.invalid)     {return;}
     console.log('Fomulario Enviado', this.user);
      console.log(form);
     
   }

}
