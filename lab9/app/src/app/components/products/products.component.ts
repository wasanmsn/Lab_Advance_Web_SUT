import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../service/products.service'
import {LocalStorageService} from 'angular-web-storage'
import {Router} from "@angular/router"


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products:any
    token: string

  constructor(private productService : ProductsService,public local:LocalStorageService, private router : Router) {
    try {
      this.token = this.local.get('user').token
      this.productService.getAllProducts(this.token).subscribe(
        data => {
          this.products = data
        },
        err => {
          this.router.navigate(["/signin"])
        }
      )
    } catch (error) {
        console.log(error)
    }
   }

  ngOnInit(): void {
  }
  signout(){
    this.local.clear()
    this.router.navigate(["/signin"])
  }

}
