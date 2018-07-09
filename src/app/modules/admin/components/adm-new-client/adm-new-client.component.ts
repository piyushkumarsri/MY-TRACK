import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../../../../shared/rest.service';

@Component({
  selector: 'app-adm-new-client',
  templateUrl: './adm-new-client.component.html',
  styleUrls: ['./adm-new-client.component.css']
})
export class AdmNewClientComponent implements OnInit {

  regForm: FormGroup;
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.prepareForm();
  }

  disableForm() {
    this.regForm.disable();
  }

  enableForm() {
    this.regForm.enable();
  }
  save() {
    console.log(this.regForm.value);
    if(this.regForm.valid){
      this.rest.post('admin/save-client',this.regForm.value)
      .subscribe(res=>{
        
        if(res.status){
          alert("Client Saved");
          this.regForm.reset();
        }else {
          alert('Failed to save the client!');
        }
      });
    }
  
  }
  prepareForm() {
    this.regForm = new FormGroup({
      clientName: new FormControl('Mr.', Validators.required),
      orginationName: new FormControl(null, Validators.required),
      contactPerson: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.email]),
      address: new FormControl(),
    });
  }

}
