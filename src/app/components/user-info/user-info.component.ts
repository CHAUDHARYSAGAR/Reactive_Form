import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{

  @Input() controlname:string;
  userForm: FormGroup;

  constructor(private controlContiner: ControlContainer) {}

  ngOnInit() {
    this.userForm = this.controlContiner.control.get(this.controlname) as FormGroup
  }
}
