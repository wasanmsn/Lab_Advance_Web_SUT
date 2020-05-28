import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {Router} from "@angular/router"

import {AuthService} from '../../service/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl("")
  })

  constructor(private auth:AuthService,private rotuer : Router) { }

  ngOnInit(): void {
  }

signin(){
  console.log(this.authForm.value)
  this.auth.signIn(this.authForm.value).subscribe(
    data => {
      if(data.status === true){
        this.rotuer.navigate(["/products"])
      }
      else{
        alert('Username or Password is incorrect')
      }
    },
    err => {
      alert('Username or Password is incorrect')
    }
  )
}

signup(){
  console.log(this.authForm.value)
  this.auth.signUp(this.authForm.value).subscribe(() => {
    alert("Create your account successfully")
  })
  
}

}
