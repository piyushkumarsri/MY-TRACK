import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { TrackingValidators } from '../../../../shared/tracking.validators';
import { RestService } from '../../../../shared/rest.service';
@Component({
  selector: 'app-adm-new-project',
  templateUrl: './adm-new-project.component.html',
  styleUrls: ['./adm-new-project.component.css']
})
export class AdmNewProjectComponent implements OnInit {

  clients;
  form: FormGroup;
  billingType: Array<string>;
  techoStackArray: FormArray;
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.fetchClients();
    this.techoStackArray = new FormArray([]);
    this.prepareForm();
    this.billingType = ["HOURLY", 'FIXED'];
    this.addToStack();
  }

  save() {
    debugger;
    console.log(this.form.value);
    if(this.form.valid){
      this.rest.post('admin/save-project',this.form.value)
      .subscribe(res=>{
        if(res.status){
          alert("Project Saved");
          this.form.reset();
        }else {
          alert('Failed to save the client!');
        }
      });
    }

  }

  private prepareForm() {
    this.form = new FormGroup({
      client: new FormControl(null, [Validators.required]),
      projectName: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      billingType: new FormControl(null, [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      projectedEndDate: new FormControl(null, [Validators.required]),
      weburl: new FormControl(null, [Validators.required, TrackingValidators.httpUrl]),
      technoStack: this.techoStackArray
    });
  }

  addToStack() {
   

    var stack = new FormGroup({
      stack_name: new FormControl(null),
      stack_desc: new FormControl(null)
    });

    this.techoStackArray.push(stack);
    this.addRequired();
   // this.techoStackArray.enable();
  }


  fetchClients(){
    this.rest.fetch('admin/fetch-client')
    .subscribe(res=>{

        if(res.status){
          debugger
          this.clients = res.data;
          
        }
    });
  }


  addRequired(){

     let indx = 0;
     this.techoStackArray.controls.forEach((item:FormGroup)=>{
      if(indx==0){
        console.log("check");
      //  setTimeout(()=>{
        
         
      
      item.get('stack_name').setValidators([Validators.required]);
        item.get('stack_desc').setValidators([Validators.required]);
         item.get('stack_name').updateValueAndValidity();
         item.get('stack_desc').updateValueAndValidity();
      //  });
  
      }else {
        console.log("check");
        item.get('stack_name').clearValidators();
        item.get('stack_desc').clearValidators();
      }
      ++indx;
     });
  }

  removeStack(indx) {

    this.techoStackArray.removeAt(indx);
    this.addRequired();
  //  this.techoStackArray.disable();
   // this.form.getRawValue();
  }



}
