import { Component, Input, Output, EventEmitter , OnInit, ViewChild 
, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
	
	@Input() parentData: number;
	
	@Output() messageEvent = new EventEmitter<number>();
	
	childData: number;
	
  constructor() { console.log('constructor Work!'); }
	
  ngOnInit(): void {
	  this.childData=0;
	  console.log('ngOnInit Work!');
  }ngOnChanges(){
	  console.log('ngOnChanges Work!');
  }
  ngDoCheck(){
	  console.log('ngDoCheck Work!');
  }
  ngAfterContentInit(){
	  console.log('ngAfterContentInit Work!');
  }
  ngAterViewChecked(){
	  console.log('ngAterViewChecked Work!');
  }
  ngOnDestroy(){
	  console.log('ngOnDestroy Work!');
  }
  onClick2Parent(){
	  this.childData +=1;
	  this.messageEvent.emit(this.childData);
	  
  }

}
