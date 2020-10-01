import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartData } from 'chart.js';
import * as d3 from 'd3';
import { finalize } from 'rxjs/operators';
import { ScaleBar } from '../../models/scale-bar.model';
import { ApiService } from '../../services/api.service';
import 'chartjs-chart-box-and-violin-plot';
@Component({
  selector: 'app-scale-bar2017',
  templateUrl: './scale-bar2017.component.html',
  styleUrls: ['./scale-bar2017.component.scss']
})
export class ScaleBar2017Component implements OnInit {
  private scaleBar: ScaleBar[] = [];
  private  boxPlotData: ChartData;
  private chart: Chart;
  private months = [];
  private plotColors = ['aqua', 'cornflowerblue', 'lightcoral', 'lightblue', 'lightskyblue', 'lightgreen',
  'lightyellow', 'darkorange', 'darkviolet', 'darkturquoise', 'crimson', 'gold'];

  constructor(private api: ApiService, private readonly ngZone: NgZone, private readonly elementRef: ElementRef) { }

  ngOnInit() {
    this.loadScaleBar2017();
  }

  loadScaleBar2017() {
    this.api.getScaleBar2017()
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        data => {
          const csvToRowArray = data.split('\n');
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            const row = csvToRowArray[index].split(',');
            this.scaleBar.push(new ScaleBar(row[12], row[8]));
            if(this.months.indexOf(row[12]) === -1){
              this.months.push(row[12]);
            }
          }
          this.drawBoxPlot();
        }
      );
  }

  drawBoxPlot() {
    const data = [];
    let previousValue = 0;

    this.scaleBar.forEach(x => {
      data.push([Number(x.scaleBar), Number(previousValue)]);
      previousValue = Number(x.scaleBar);
    });

    this.boxPlotData = {
      labels: this.months,
      datasets: [{
        backgroundColor: this.plotColors,
        data: data
      }]
    };
    this.ngZone.runOutsideAngular(() => {
      const node: HTMLElement = this.elementRef.nativeElement;
      this.chart = new Chart(node.querySelector('canvas'), {
        type: 'boxplot',
        data: this.boxPlotData,
        options: {
          legend: {
              display: false
          },
          title: {
            display: true,
            text: 'Year 2017'
          }
      }
      });
    });
  }
}
