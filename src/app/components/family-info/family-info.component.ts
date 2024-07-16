import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, ControlContainer, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/custom-validator/numeric.validator';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css']
})
export class FamilyInfoComponent implements OnInit {
  membersCount: number = 1;
  familyForm: FormArray;
  @Input() controlname: string;

  constructor(private fb: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.familyForm = this.controlContainer.control.get(this.controlname) as FormArray;
    if (this.familyForm.length === 0) {
      this.familyForm.push(this.createMember());
    }
  }

  createMember(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      relation: ['', Validators.required],
      age: ['', [Validators.required, CustomValidator.numeric]]
    });
  }

  addFamilyMember() {
    this.familyForm.push(this.createMember());
    this.membersCount++;
  }

  removeFamilyMember(index: number): void {
    if (this.familyForm.length > 1) {
      this.familyForm.removeAt(index);
      this.membersCount--;
    }
  }
}
