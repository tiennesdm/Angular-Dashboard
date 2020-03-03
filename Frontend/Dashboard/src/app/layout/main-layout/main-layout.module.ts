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
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";

@NgModule({
  declarations: [MainLayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule
  ]
})
export class MainLayoutModule {}
