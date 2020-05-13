import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
	show : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
	  this.show = !this.show
  }

}
