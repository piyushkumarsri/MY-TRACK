import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class SecureGuard implements CanActivate {

    constructor(private auth:AuthService){

    }
    canActivate( ): boolean {
        console.log("gaurd",this.auth.isAuthenticated());
        return this.auth.isAuthenticated();
    }
}
