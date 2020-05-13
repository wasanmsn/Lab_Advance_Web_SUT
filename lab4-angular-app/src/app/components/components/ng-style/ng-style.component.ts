import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
	@Output() messageEvent = new EventEmitter<string>();
	colorProperty : string = '';
	r: number = 10;
	g: number = 10;
	b: number = 10;
  constructor() { }

  ngOnInit(): void {
  }
  ngStyleMethod(){
	  this.colorProperty = 'rgb('+this.r+','+this.g+','+this.b+')'
	  this.messageEvent.emit(this.colorProperty)
  }

}
