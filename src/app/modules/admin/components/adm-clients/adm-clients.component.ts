import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../shared/rest.service';

@Component({
  selector: 'app-adm-clients',
  templateUrl: './adm-clients.component.html',
  styleUrls: ['./adm-clients.component.css']
})
export class AdmClientsComponent implements OnInit {


  clients;
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients(){
    this.rest.fetch('admin/fetch-client')
    .subscribe(res=>{

        if(res.status){
          this.clients = res.data;
          
        }
    });
  }

}
