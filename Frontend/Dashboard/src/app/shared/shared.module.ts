import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HighchartsChartModule } from "highcharts-angular";
import { RouterModule } from "@angular/router";
import { PieChartComponent } from "./widget/pie-chart/pie-chart.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./widget/card/card.component";
import { CountTotalAreaComponent } from "./widget/count-total-area/count-total-area.component";
import { MapComponent } from "./widget/map/map.component";

@NgModule({
  declarations: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent,
    MapComponent
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
    RouterModule,
    HighchartsChartModule,
    MatCardModule
  ],
  exports: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent,
    MapComponent
  ]
})
export class SharedModule {}
