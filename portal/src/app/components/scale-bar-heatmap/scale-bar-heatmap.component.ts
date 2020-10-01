import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgModule, NgZone, OnInit } from '@angular/core';
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

  private heatMap: Heatmap[] = [];
  private boxPlotData: ChartData;
  private chart: Chart;
  public chartOptions: Partial<ChartOptions>;
  private plotColors = ['aqua', 'cornflowerblue', 'lightcoral', 'lightblue', 'lightskyblue', 'lightgreen',
  'lightyellow', 'darkorange', 'darkviolet', 'darkturquoise', 'crimson', 'gold'];
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
    console.log(series)
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
          console.log(this.heatMap);
        }
      );
  }

  generateHeatmap() {
    const series = [];
    this.heatMap.forEach(hM => {
      let index = 1;
      const data=[];
      hM.values.forEach(v => {
        data.push({x: index, y: Number(v)});
        index += 1;
      });
      series.push({name: hM.county, data: data});

    });
    console.log('series=', series);
    this.chartOptions = {
      series: series,
      chart: {
        height: 350,
        type: "heatmap"
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: "#008FFB"
              },
              {
                from: 51,
                to: 100,
                color: "#00E396"
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
        text: "Rounded (Range without Shades)"
      }
    };
  }
}
