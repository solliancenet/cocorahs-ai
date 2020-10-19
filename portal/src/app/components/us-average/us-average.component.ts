import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UsAverage } from 'src/app/models/us-average.model';
import { ApiService } from 'src/app/services/api.service';
import * as ChartGeo from "chartjs-chart-geo";
import 'chartjs-chart-geo';
import { Label } from 'ng2-charts';
import * as us from 'us-atlas/states-10m.json';

@Component({
  selector: 'app-us-average',
  templateUrl: './us-average.component.html',
  styleUrls: ['./us-average.component.scss']
})
export class UsAverageComponent implements OnInit {

  private usAverage: UsAverage[] = [];
  public data: any;
  public geoChartType: any;
  public geoChartLegend: any;
  public geoChartOptions: any;
  public geoChartLabels: Label[];
  public geoColors: any;
  public geoChartData: any;
  public selectedMonth = 1;
  public months = [{id: 1, name: 'January 2018'}, {id: 2, name: 'February 2018'},
  {id: 3, name: 'March 2018'}, {id: 4, name: 'April 2018'}, {id: 5, name: 'May 2018'}, {id: 6, name: 'June 2018'},
  {id: 7, name: 'July 2018'}, {id: 8, name: 'August 2018'}, {id: 9, name: 'September 2018'}, {id: 10, name: 'October 2018'},
  {id: 11, name: 'November 2018'}, {id: 12, name: 'December 2018'}];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadUsAverage(this.selectedMonth);
  }

  loadUsAverage(selectedMonth: number) {
    this.api.getUsAverage()
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        data => {
          this.usAverage = [];
          const csvToRowArray = data.split('\n');
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            const row = csvToRowArray[index].split(',');
            if (row[4] ==  Number(selectedMonth)) {
              this.usAverage.push(new UsAverage(row[0], row[1], row[3], row[4]));
            }
          }
          this.drawMap();
        }
      );
  }

  drawMap() {
    fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((result) => {
      const nation = ChartGeo.topojson.feature(result, us.objects.nation).features[0];
      const states = ChartGeo.topojson.feature(result, us.objects.states).features;

      this.geoChartType = 'choropleth';
      this.geoChartLegend = false;
      this.geoChartOptions = {
        responsive: true,
        scale: {
          projection: 'albersUsa'
        } as any,
        geo: {
          colorScale: {
            display: true,
            position: 'bottom',
            quantize: 0,
            legend: {
              position: 'bottom-right'
            }
          }
        }
      };
      this.geoChartLabels = states.map(d => d.properties.name);
      this.geoColors = states.map(() => ({}));

      const data = states.map(d => ({
        feature: d,
        value: Math.random() * 10
      }));

      data.forEach(el => {
        const stringState = el.feature.properties.name.toString();
        const existing = this.usAverage.find(u => u.state == stringState);
        if (existing !== undefined) {
          el.value = Number(existing.scaleBar);
        }
      });

      this.geoChartData = [
        {
          label: 'States',
          outline: nation,
          data: data
        }
      ];
    });
  }

  monthChanged(){
    this.loadUsAverage(this.selectedMonth);
  }
}
