import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

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

  constructor() { }

  ngOnInit(): void {
  }

signin(){
  console.log(this.authForm.value)
}

}
