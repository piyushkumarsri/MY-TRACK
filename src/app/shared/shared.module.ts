import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';
import { SecureGuard } from './gaurds/secure.gaurd';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[RestService,AuthService,SecureGuard],
  declarations: []
})
export class SharedModule { }
