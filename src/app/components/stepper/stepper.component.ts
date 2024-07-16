import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  @Input() steps: string[];
  @Input() currentStepIndex: number = 0;
  @Output() stepChanged = new EventEmitter<number>();

  goToStep(index: number){
    if (index <= this.currentStepIndex) {
      this.currentStepIndex = index;
      this.stepChanged.emit(this.currentStepIndex);
    }
    else {
      alert('Not Allowed!')
    }
  }
}
