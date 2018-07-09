import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { HomeComponent } from "./components/home/home.component";
import { Routes } from "@angular/router";
import { SecureGuard } from "../shared/gaurds/secure.gaurd";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home", component: HomeComponent, children: [
      { path: "admin", loadChildren: "app/modules/admin/admin.module#AdminModule" },
      { path: "invoice", loadChildren: "app/modules/invoice/invoice.module#InvoiceModule" }
    ],
    canActivate:[SecureGuard]
  },
  { path: "aboutus", component: AboutusComponent }
];