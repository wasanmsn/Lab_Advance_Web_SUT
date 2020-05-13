import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  status:boolean;
  
  constructor() { }

  ngOnInit(): void {
	  this.status = false;
  }
  ngClassMethod(){
	  this.status = !this.status;
  }

}
