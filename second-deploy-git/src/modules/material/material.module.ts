import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class MaterialModule { }
