import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title!: string;

  /** reactive form */
  formData!: FormGroup;
  userName: string = "";

  // form validation
  requiredForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.title = "Form Application";
    this.formData = new FormGroup({
      userName: new FormControl("Enter username!")
    });
    this.initRequiredForm();
  }

  initRequiredForm() {
    this.requiredForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  onClickSubmit(data: any) {
    console.log("You have entered : " + data.username);
  }

  onReactiveFormSubmit(data: any) {
    this.userName = data.userName;
    console.log("You have entered : " + this.userName);
  }

}
