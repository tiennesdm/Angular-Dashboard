import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PieChartComponent } from "./widget/pie-chart/pie-chart.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./widget/card/card.component";
import { CountTotalAreaComponent } from './widget/count-total-area/count-total-area.component';

@NgModule({
  declarations: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
