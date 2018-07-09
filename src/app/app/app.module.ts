import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";

import { routes } from './app.routes';
import { CoreModule } from "../core/core.module";
import { UiToolkitModule } from "../ui-toolkit/ui-toolkit.module";
import { AdminModule } from "../modules/admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    UiToolkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
