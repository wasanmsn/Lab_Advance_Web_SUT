import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService:ProductsService,private CS:CartService) { }
  faCartPlus = faCartPlus;
  ngOnInit(): void {
  }
  getAllProduct(){
	  return this.productsService.getAllProduct();
  }
  addToCart(p_id:number){
	  this.CS.add(p_id);
  }
	
}
