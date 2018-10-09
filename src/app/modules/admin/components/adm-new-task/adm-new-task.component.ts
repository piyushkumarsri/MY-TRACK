import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RestService } from '../../../../shared/rest.service';
import { TrackingValidators } from '../../../../shared/tracking.validators';

@Component({
  selector: 'app-adm-new-task',
  templateUrl: './adm-new-task.component.html',
  styleUrls: ['./adm-new-task.component.css']
})
export class AdmNewTaskComponent implements OnInit {
  form: FormGroup;
  taskType: Array<string>;
  projects;

  //constructor() { }
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.fetchProjects();
    this.prepareForm();
    this.taskType = ["type 1", 'type 2'];
  }
  fetchProjects(){
    this.rest.fetch('admin/fetch-project')
    .subscribe(res=>{
  
        if(res.status){
          debugger
          this.projects = res.data;
          
        }
    });
  }
  save() {
    console.log(this.form.value);
    if(this.form.valid){
      this.rest.post('admin/save-task',this.form.value)
      .subscribe(res=>{
        
        if(res.status){
          alert("Task Saved");
          this.form.reset();
        }else {
          alert('Failed to save the client!');
        }
      });
    }
  
  }
  private prepareForm() {
    this.form = new FormGroup({
      //client: new FormControl(null, [Validators.required]),
      projectName: new FormControl(null, [Validators.required]),
      taskname: new FormControl(null, [Validators.required]),
      taskdescription: new FormControl(null, [Validators.required]),
      tasktype: new FormControl(0, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
      projectedStartDate: new FormControl(null, [Validators.required]),
      projectedEndDate: new FormControl(null, [Validators.required]),
      weburl: new FormControl(null, [Validators.required, TrackingValidators.httpUrl]),
    });
  }
}



 
