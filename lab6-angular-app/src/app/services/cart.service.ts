import { Injectable } from '@angular/core';
import { productType } from './products.model';
import { ProductsService } from './products.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
	counter: number = 0;
	sumPrice: number = 0;
	cart : productType = []
  constructor(private productsService:ProductsService) { }
  
  add(p_id:number){
	  console.log('Add product id: '+p_id+' to cart');
	  this.cart.push(this.productsService.getSomeProducts(p_id));
	  this.sumPrice += this.productsService.getSomeProducts(p_id).p_price;
	  this.counter = this.cart.length;
  }
  getCounter(){
	  return this.counter;
  }
  getsumPrice(){
	  return this.sumPrice;
  }
  getCart(){
	  return this.cart;
  }
}
