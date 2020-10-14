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
  public months = [{id: 1, name: 'January'}, {id: 2, name: 'February'},
  {id: 3, name: 'March'}, {id: 4, name: 'April'}, {id: 5, name: 'May'}, {id: 6, name: 'June'},
  {id: 7, name: 'July'}, {id: 8, name: 'August'}, {id: 9, name: 'September'}, {id: 10, name: 'October'},
  {id: 11, name: 'November'}, {id: 12, name: 'December'}];
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
            quantize: 5,
            legend: {
              position: 'bottom-right'
            }
          }
        }
      };
      this.geoChartLabels = states.map(d => d.properties.name);
      this.geoColors = states.map(() => ({}));

      const data = [];
      this.usAverage.forEach(x => {
        const stringState = x.state.toString();
        const existingState = states.find( x => x.properties.name === stringState);
        data.push({feature: existingState, value: Number(x.scaleBar)});
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
