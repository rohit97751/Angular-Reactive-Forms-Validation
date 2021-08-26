import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // Form!: FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.Form = this.formBuilder.group({
  //     firstName: formBuilder.control(''),
  //     lastName: formBuilder.control(''),
  //     emailId: formBuilder.control(''),
  //     phoneNumber: formBuilder.control(''),
  //   });
  // }
  ngSubmit = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}
  submit: boolean = false;
  Form = this.formBuilder.group({
    firstName: this.formBuilder.control('', [Validators.required]),
    lastName: this.formBuilder.control('',[Validators.required]),
    emailId: this.formBuilder.control('',[Validators.email]),
    phoneNumber: this.formBuilder.control('',[Validators.pattern(/^([0-9]){10}$/)]),
  });

  public onSubmit() {
    this.submit = true;
    console.log(this.Form.value);
   
    
  }

  public control() {
    return this.Form.controls;
  }

  ngOnInit(): void {}
}
