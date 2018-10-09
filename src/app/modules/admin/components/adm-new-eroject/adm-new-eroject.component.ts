import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../shared/rest.service';

@Component({
  selector: 'app-adm-new-eroject',
  templateUrl: './adm-new-eroject.component.html',
  styleUrls: ['./adm-new-eroject.component.css']
})
export class AdmNewErojectComponent implements OnInit {
projects;
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.fetchProjects();
  }
  fetchProjects(){
    this.rest.fetch('admin/fetch-project')
    .subscribe(res=>{

        if(res.status){
          this.projects = res.data;
          
        }
    });
  }
}
