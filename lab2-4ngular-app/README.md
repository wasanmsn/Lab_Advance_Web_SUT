# Lab2AngularApp

## ngModel ใน tag input ไม่ทำการ binding
มันจะมี Error ประมาณว่า 
> Can't bind to 'ngModel' since it isn't a known property of 'input'.

ให้ ไปที่ `lab2-angular-app\src\app\app.module.ts` ทำการ `Import FormsModule` จาก `@angular/forms`
```TypeScript
import { FormsModule } from '@angular/forms';
```
ใน @NgModule เพิ่ม `FormsModule` ไปใน `imports`
```TypeScript
import:[
  ....,
  FormsModule
]
```
