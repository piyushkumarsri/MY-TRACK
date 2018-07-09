import { Component, OnInit } from '@angular/core';
import { MENU } from '../../app.menu.model';
import { AuthService } from '../../../shared/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedMenu;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.selectedMenu = MENU.ADMIN;
  }

  doLogout(){
    this.auth.logout();
  }

}
