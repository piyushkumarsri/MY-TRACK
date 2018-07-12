import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-adm-new-task',
  templateUrl: './adm-new-task.component.html',
  styleUrls: ['./adm-new-task.component.css']
})
export class AdmNewTaskComponent implements OnInit {
  form: FormGroup;
  taskType: Array<string>;

  constructor() { }

  ngOnInit() {
    
    this.prepareForm();
    this.taskType = ["type 1", 'type 2'];
  }
  private prepareForm() {
    this.form = new FormGroup({
      taskType: new FormControl(null, [Validators.required])
    });
  }
}
