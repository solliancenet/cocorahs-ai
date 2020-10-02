import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Heatmap } from 'src/app/models/heatmap.model';
import { ApiService } from 'src/app/services/api.service';
import * as Chart from 'chart.js';
import { ChartData } from 'chart.js';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: any;
  colors: any;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-scale-bar-heatmap',
  templateUrl: './scale-bar-heatmap.component.html',
  styleUrls: ['./scale-bar-heatmap.component.scss']
})
export class ScaleBarHeatmapComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;

  private heatMap: Heatmap[] = [];
  private boxPlotData: ChartData;
  public chartOptions: Partial<ChartOptions>;

  private months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  constructor(private api: ApiService, private readonly ngZone: NgZone, private readonly elementRef: ElementRef) { }

  ngOnInit() {
    this.loadHeatmap();
  }

 generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  loadHeatmap() {
    this.api.getHeatmap()
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        data => {
          const csvToRowArray = data.split('\n');
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            const row = csvToRowArray[index].split(',');
            this.heatMap.push(new Heatmap(row[0], [row[1], row[2], row[3], row[4], row[5],
               row[6], row[7], row[8], row[9], row[10], row[11], row[12]]));
          }
        this.generateHeatmap();
        }
      );
  }

  generateHeatmap() {
    const series = [];
    this.heatMap.forEach(hM => {
      let index = 1;
      const data = [];
      hM.values.forEach(v => {
        if (v !== '') {
          data.push({x: index, y: Math.round(v * 100) / 100});
        }else{
          data.push({x: index, y: null});

        }
        index += 1;
      });
      series.push({name: hM.county, data: data});
    });
    
    this.chartOptions = {
      series: series,
      chart: {
        height: 850,
        width: 600,
        type: 'heatmap'
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        heatmap: {
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: -3,
                to: -2,
                color: "#cc0000"
              },
              {
                from: -2,
                to: -1,
                color: "#ff8000"
              },
              {
                from: -1,
                to: 0,
                color: "#ffcccc"
              },
              {
                from: 0,
                to: 0,
                color: "#ffffff"
              },
              {
                from: 0,
                to: 1,
                color: "#A5BAEC"
              },
              {
                from: 1,
                to: 2,
                color: "#6B91EB"
              },
              {
                from: 2,
                to: 3,
                color: "#1853DF"
              },
              {
                from: null,
                to: null,
                color: "#ffffff"
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"]
        }
      },
      xaxis: {
        type: "category"
      },
      title: {
        text: "Heatmap"
      }
    };
  }
}
