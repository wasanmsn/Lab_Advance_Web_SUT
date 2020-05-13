import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
	test  = ["id","ws"]
	employee: any = [
    { "id": "1", "employee_name": "WdqBvFe", "employee_salary": "797", "employee_age": "36" },
    {"id":"1925","employee_name":"Menaka6","employee_salary":"24501","employee_age":"24501"},
    {"id":"1969","employee_name":"2381","employee_salary":"123","employee_age":"23"},
    {"id":"1970","employee_name":"6132","employee_salary":"123","employee_age":"23"},
    {"id":"1972","employee_name":"2022","employee_salary":"123","employee_age":"23"},
    {"id":"1973","employee_name":"4604","employee_salary":"123","employee_age":"23"},
    {"id":"1976","employee_name":"Shylu","employee_salary":"123","employee_age":"23"},
    {"id":"1977","employee_name":"8221","employee_salary":"123","employee_age":"23"},
    {"id":"1981","employee_name":"111test","employee_salary":"123","employee_age":"23"},
    {"id":"1996","employee_name":"test-709","employee_salary":"123","employee_age":"23"},
    {"id":"1997","employee_name":"test-654","employee_salary":"123","employee_age":"23"},
    {"id":"1999","employee_name":"test-127","employee_salary":"123","employee_age":"23"},
    {"id":"2001","employee_name":"test-301","employee_salary":"123","employee_age":"23"},
    {"id":"2003","employee_name":"1769","employee_salary":"123","employee_age":"23"},

  ]
  constructor() { }
	
  ngOnInit(): void {
  }

}
