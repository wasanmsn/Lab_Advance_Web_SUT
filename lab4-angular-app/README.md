# Lab4AngularApp

# แลปนี้ไม่มีมาก ทำเหมือนแลปที่แล้ว แต่อาจารย์สับขาหลอกนิดหน่อย
ตอนไห้เล่นกับ FormArray เวลาจะส่งค่าไปมันไม่เหมือน กับ FormControl หรือ FormGroup(มั้งเท่าที่ลองแก้มา) ปกติเราใช้ ฟอร์มแล้วก็ชื่อฟืลด์ `formControlName = 'Name'` ไรประมาณนี้แต่สำหรับเข้าตัวนี้มันเหมือนไม่ได้ bind กับข้างหลัง(ไฟล์ ts) เลยใช้ตัวนี้แทน `[formControl]="aliases.controls[i]"` 
ส่วนตัว validator ก็ โค้ดเหมือน ๆ กับ email ที่ไห้เราตรวจรหัสนักศึกษา ก่อนอื่นก็สร้าง ฟิลด์ใน ฟอร์มก่อนพร้อม pattern ( ก๊อบในเอกสารก็ได้ ) จากนั้น **อย่าลืม** สร้าง getter สำหรับ ฟิลด์นั้นด้วย 
```JAVASCRIPT
  get stid() {
    return this.profileForm.get('stid');
  }
```
ส่วนในไฟล์ `html` เราก็ทำเงื่อนใขคล้าย ๆ กับ email นั้นแหละแต่ ไห้เปลี่ยนตรง `*ngIf = "email.errors.email"` เปลี่ยนเป็น `*ngIf = stid.errors.pattern` แทน

และถ้าอยากทำไห้เหมือน VDO ก็ ไปดู Input placeholder มา กับ Ifelse ของ Angular
