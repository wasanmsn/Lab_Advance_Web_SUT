import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	
	googleUrl: string;
	facebookUrl: string;

  constructor() { }

  ngOnInit(): void {
	  this.googleUrl = "https://www.google.com";
	  this.facebookUrl = "http://www.facebook.com";
  }
  getUrlFacebook(){
	  return this.facebookUrl;
  }

}
