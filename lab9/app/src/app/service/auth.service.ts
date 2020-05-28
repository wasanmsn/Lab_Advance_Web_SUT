import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {LocalStorageService} from 'angular-web-storage'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,public local:LocalStorageService) { }

  signIn(authData: any){
    return this.http.post<any>('http://localhost:3000/login/signin',authData)
    .pipe(map(data => {
      if(data){
        this.local.set('user',data,1,'w')
        console.log(this.local.get('user'))
      }
      return data
    }))
  }
  signUp(signUpData: any){
    return this.http.post<any>('http://localhost:3000/user/signup',signUpData)
   
     
    
  }
}
