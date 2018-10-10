import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../shared/rest.service';

@Component({
  selector: 'app-adm-new-taskss',
  templateUrl: './adm-new-taskss.component.html',
  styleUrls: ['./adm-new-taskss.component.css']
})
export class AdmNewTaskssComponent implements OnInit {
  task;

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.fetchtask();
  }
  fetchtask(){
    this.rest.fetch('admin/fetch-task')
    .subscribe(res=>{

        if(res.status){
          this.task = res.data;
          
        }
    });
  }

}
