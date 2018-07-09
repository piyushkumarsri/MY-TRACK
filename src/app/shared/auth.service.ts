import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private user;
    private isLoggedIn;


    login(user) {
        this.user = user;
        this.isLoggedIn = true;
        console.log(this.user,this.isLoggedIn);
    }

    isAuthenticated():boolean {
       // console.log('coming',this.user,this.isLoggedIn);
        return this.isLoggedIn && this.user!=null;
    }

    logout() {
        this.isLoggedIn= false;
        this.user = null;
    }
}