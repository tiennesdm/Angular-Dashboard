import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: "Browser market shares at a specific website, 2014"
      },
      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 35,
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          }
        }
      },
      series: [
        {
          type: "pie",
          name: "Browser share",
          data: [
            ["Firefox", 45.0],
            ["IE", 26.8],
            {
              name: "Chrome",
              y: 12.8,
              sliced: true,
              selected: true
            },
            ["Safari", 8.5],
            ["Opera", 6.2],
            ["Others", 0.7]
          ]
        }
      ]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
