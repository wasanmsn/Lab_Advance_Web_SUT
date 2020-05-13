import { Injectable } from '@angular/core';
import { productType } from './products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	
	product_list:productType = [
		{p_id:10001,p_name:'Intel Core i7 Gen 10th',p_quantity:10,p_price:7000},
		{p_id:10002,p_name:'NVIDIA GeForce GTX 1650',p_quantity:5,p_price:5000},
		{p_id:10003,p_name:'240 GB SSD SATA Kingston A400',p_quantity:10,p_price:1300},
		{p_id:10004,p_name:'2066 MSI X299 PRO',p_quantity:10,p_price:7790},
		{p_id:10005,p_name:'RAM DDR(4500) 16GB (8GBX2) TEAM Xtreem Black',p_quantity:10,p_price:12900}
	]

  constructor() { }
  
  getAllProduct(){
	  return this.product_list;
  }
  getSomeProducts(p_id:number){
	  return this.product_list[p_id];
  }
}
