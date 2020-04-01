import { Component, OnInit, ViewChild 
, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
, AfterViewInit, AfterViewChecked, OnDestroy, 
} from '@angular/core';
import { ChildComponent } from '../child/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges, OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	
	@ViewChild(ChildComponent)
	childComponent: ChildComponent;
	public showChild = true;
	parentData: number;
	childData: number;
	textMessage: string;
	status: string;
  constructor() { 
  console.log('constructor Work!'); }

  ngOnInit(): void {
	  this.parentData=0;
	  this.childData = 0;
	  console.log('ngOnInit Work!');
  }
  ngOnChanges(){
	  console.log('ngOnChanges Work!');
  }
  ngDoCheck(){
	  console.log(this.textMessage);
	  console.log('ngDoCheck Work!');
  }
  ngAfterContentInit(){
	  console.log('ngAfterContentInit Work!');
  }
  ngAfterContentChecked(){
	  if(this.textMessage == "B6015145"){
		  this.status = "Your ID is OK";
		  
	  }
	  else{
		  this.status = "Error";
	  }
	  console.log('ngAfterContentChecked');
  }
  ngAterViewChecked(){
	  console.log('ngAterViewChecked Work!');
  }
  ngOnDestroy(){
	  console.log('ngOnDestroy Work!');
  }
  onClickViewChild(){
	  this.childComponent.onClick2Parent();
  }
  onClick2Child(){
	  console.log(this.textMessage);
	  this.parentData += 1;
  }
  receiveData($event){
	  this.childData = $event;
  }
  update(){
	  this.showChild = !this.showChild
  }

}
