import { CustomMaterialModule } from 'src/app//custom.material.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullwidthComponent } from "./fullwidth.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../../modules/login/login.component";
import { SharedModule } from "../../shared/shared.module";

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [

  ]
})
export class FullwidthModule { }
