import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	styleData:string;
	
	receiveData($event){
		this.styleData = $event;
	}
  title = 'lab4-angular-app';
}
