import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-angular14-app';
  EmployeeArray: Employee[] = [];
  EmployeeFormGroup: FormGroup;

  ngOnInit(): void {
    this.refreshTable();
  }

  constructor(private empService: EmployeeService,private fb: FormBuilder,private translate: TranslateService){
    
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang("en");
    this.translate.use("en");
    
    this.EmployeeFormGroup = this.fb.group({
      id: [0],
      name: [""],
      mobileNo: [""],
      emailid:[""]
    })
  }

  refreshTable(){
    this.empService.GetEmployee().subscribe(res => {
      console.log(res);
      this.EmployeeArray = res;
    })
  }

  fillEmployee(emp:Employee){
    this.EmployeeFormGroup.setValue({
      id: emp.id,
      name: emp.name,
      mobileNo: emp.mobileno,
      emailid:emp.emailid        
    })
  }

  OnSubmit(){
    this.empService.AddEmployee(this.EmployeeFormGroup.value).subscribe(res =>{
      alert('Employee added..!!');
      this.refreshTable();
      this.EmployeeFormGroup.setValue({
        id: [0],
        name: [""],
        mobileNo: [""],
        emailid:[""]        
      })
    })
  }

}
