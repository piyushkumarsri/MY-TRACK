import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../../shared/rest.service';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(private router: Router, 
    private rest: RestService,
    private auth:AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    debugger
    this.rest.post('dologin', { username: this.username, password: this.password })
      .subscribe(res => {
        debugger
        if (res.status) {
        
          this.auth.login(res.data);
          this.router.navigate(['home']);

        } else {
          alert(res.msg);
        }
      });
  }

}
