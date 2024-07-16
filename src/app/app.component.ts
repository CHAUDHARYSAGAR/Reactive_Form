import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator/numeric.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  steps = ['Personal Information', 'Family Information', 'Creative Section'];
  formKeys: string[] = ['userInfo', 'familyInfo'];
  currentStep: number = 0;

  parentForm: FormGroup;
  submittedData: any;
  
  constructor(private fb: FormBuilder){
    this.parentForm = this.fb.group({
      userInfo: this.getUserForm(),
      familyInfo: this.fb.array([]),
    })
  }

  getUserForm() : FormGroup{
    const newForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, CustomValidator.phoneNumber]],
      address: ['', Validators.required],
      age: ['', [Validators.required, CustomValidator.numeric]]
    })
    return newForm;
  }

  onStepChanged(stepIndex: number) {
    this.currentStep = stepIndex;
  }

  private getCurrentFormGroup(): FormGroup | FormArray {
    const formKey = this.formKeys[this.currentStep];
    return this.parentForm.get(formKey) as FormGroup | FormArray;
  }

  nextStep() {
    const currentFormGroup = this.getCurrentFormGroup();
    if (currentFormGroup.valid) {
      this.currentStep++;
    } else {
      this.markFormGroupTouched(currentFormGroup);
      alert('Form is not valid');
    }
  }

  markFormGroupTouched(form: FormGroup | FormArray) {
    form.markAllAsTouched()
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submitForms() {
    if (this.parentForm.valid) {
      this.submittedData = this.parentForm.value;
      this.currentStep++;
      alert('Regstration Successful');      
    } else {
      alert('Not all forms are valid');
    }
  }
}
