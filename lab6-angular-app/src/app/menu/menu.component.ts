import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { productType } from '../services/products.model';
import {faShoppingCart,faHome} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	faShoppingCart = faShoppingCart;
	faHome = faHome;
	
	cart: productType = []
  constructor(private CS:CartService) { 
	this.cart = this.CS.getCart();
  }

  ngOnInit(): void {
  }
	getCounter(){
		return this.CS.getCounter();
	}
	getSumPrice(){
		return this.CS.getsumPrice();
	}
}
