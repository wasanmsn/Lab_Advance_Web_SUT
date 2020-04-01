# Lab3AngularApp
# ปัญหาหลัก ๆ
แลปนี้ ปัญหาหลัก ๆ น่าจะเป็น css ใช้งานไม่ได้ และ ตอนเรียกใช้ ngModel ใน tag input 
## CSS ใช้งานไม่ได้ :rage:
วิธีแก้ CSS ใช้งานไม่ได้หลังจาก npm install แล้ว ให้ ไปที่ไฟล์ angular.json แล้วเอาโค้ดล่างนี้ใส่เข้าไป
ใน style กับ scripts 
```JSON  
"styles": [
              "src/styles.css",
			  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
 "scripts": [
			"./node_modules/jquery/dist/jquery.min.js",
			"./node_modules/popper.js/dist/umd/popper.min.js",
			"./node_modules/bootstrap/dist/js/bootstrap.min.js"
			]
```

## ngModel ใน tag input ไม่ทำการ binding
มันจะมี Error ประมาณว่า 
> Can't bind to 'ngModel' since it isn't a known property of 'input'.

ให้ ไปที่ `lab3-angular-app\src\app\app.module.ts` ทำการ `Import FormsModule` จาก `@angular/forms`
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

---
ถ้าไม่เข้าใจก็ลอง เข้าไปดูไฟล์ที่กล่าวมา
