import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-creative-section',
  templateUrl: './creative-section.component.html',
  styleUrls: ['./creative-section.component.css']
})
export class CreativeSectionComponent implements OnInit {
  @Input() controlname: string;
  creativeForm: FormArray;
  membersCount = 0;

  constructor(private fb: FormBuilder, private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.creativeForm = this.controlContainer.control.get(this.controlname) as FormArray;
    this.membersCount = this.creativeForm.length;
    this.initializeImagesArray();
  }

  initializeImagesArray() {
    this.creativeForm.controls.forEach((member: FormGroup) => {
      if (!member.get('images')) {
        member.addControl('images', this.fb.array([]));
      }
    });
  }

  createImage(): FormGroup {
    return this.fb.group({
      image: ['', Validators.required],
      preview: ['']
    });
  }

  addImage(memberIndex: number) {
    const imagesArray = this.creativeForm.at(memberIndex).get('images') as FormArray;
    imagesArray.push(this.createImage());
  }

  removeImage(memberIndex: number, imageIndex: number) {
    const imagesArray = this.creativeForm.at(memberIndex).get('images') as FormArray;
    if (imagesArray.length > 1) {
      imagesArray.removeAt(imageIndex);
    }
  }

  onFileChange(event: any, memberIndex: number, imageIndex: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const imagesArray = this.creativeForm.at(memberIndex).get('images') as FormArray;
        imagesArray.at(imageIndex).get('preview').setValue(result);
      };
      reader.readAsDataURL(file);
    }
  }
}
