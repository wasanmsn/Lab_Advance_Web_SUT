import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : any
  constructor(private http:HttpClient) { }

  getAllProducts(token:any){
    const headers = {'authorization': token}
    return this.http.get<any>('http://localhost:3000/api/products',{headers})
    .pipe(map(data => {
      if(data){
        this.products = data
        console.log(data)
      }
      return data
    }))
  }
}
