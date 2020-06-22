import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product : any

  constructor(private http:HttpClient) { }

  addProduct(product){
    return this.http.post<any>('http://localhost:3000/products/add',product)
    .pipe(map(data => {
      return data
    }))
  }

  getProduct(){
    return this.http.get<any>('http://localhost:3000/products/get')
    .pipe(map(data => {
      if(data) {
        this.product = data
        console.log(this.product)
      }
      return this.product
    }))}
}
