import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule
  ]
})
export class MainLayoutModule {}
