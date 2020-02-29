import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { PieChartComponent } from "./widget/pie-chart/pie-chart.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./widget/card/card.component";
import { CountTotalAreaComponent } from "./widget/count-total-area/count-total-area.component";

@NgModule({
  declarations: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent
  ]
})
export class SharedModule {}
