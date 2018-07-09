import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { MATERIAL } from "./mat-material";
import {FlexLayoutModule} from '@angular/flex-layout';
const IMP_EXP = [CommonModule, FormsModule,ReactiveFormsModule, FlexLayoutModule, ...MATERIAL];
@NgModule({
  imports: IMP_EXP,
  exports: IMP_EXP,
  declarations: []
})
export class UiToolkitModule {}
