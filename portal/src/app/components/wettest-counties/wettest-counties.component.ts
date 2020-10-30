import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import 'chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js';
import * as Chart from 'chart.js';
import { WettestCounties } from 'src/app/models/wettest-counties.model';
import { ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-wettest-counties',
  templateUrl: './wettest-counties.component.html',
  styleUrls: ['./wettest-counties.component.scss']
})


export class WettestCountiesComponent implements OnInit {
  public firstBoxPlotData: any;
  public secondBoxPlotData: any;
  public thirdBoxPlotData: any;
  public fourthBoxPlotData: any;
  public fifthBoxPlotData: any;
  public sixthBoxPlotData: any;
  public seventhBoxPlotData: any;
  public eighthBoxPlotData: any;
  public ninthBoxPlotData: any;
  public tenthBoxPlotData: any;
  public options: any;
  private wettestCountiesData: WettestCounties[] = [];
  private dataList: any;
  private months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  constructor(private api: ApiService, private readonly ngZone: NgZone, private readonly elementRef: ElementRef) { }

  ngOnInit() {
    this.loadWettestCounties();
  }

  loadWettestCounties() {
    this.api.getWettestCounties()
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        data => {
          const csvToRowArray = data.split('\n');
          for (let index = 0; index < csvToRowArray.length - 1; index++) {
            const row = csvToRowArray[index].split(',');
            let count = 3;
            const list = [];
            for (let m = 1; m <= 12; m++) { // for each month
              const list2 = [];
              const value0 = (row[count + 2] === '') ? 0 : Number(row[count + 2]); // max
              const value1 = (row[count + 5] === '') ? 0 : Number(row[count + 5]); // min
              const value2 = (row[count + 2] === '') ? 0 : Number(row[count + 2]); // q3 - count sau upper
              const value3 = (row[count + 1] === '') ? 0 : Number(row[count + 1]); // q1 - lower
              const value4 = (row[count + 4] === '') ? 0 : Number(row[count + 4]); // median
              list2.push(value0);
              list2.push(value1);
              list2.push(value2);
              list2.push(value3);
              list2.push(value4);

              count += 7;
              list.push(list2);
            }
            this.wettestCountiesData.push(new WettestCounties(row[0], row[2] + ', ' + row[1], list));
          }

          this.wettestCountiesData.forEach(x => {

          })
          this.drawFirstChart();
        }
      );
  }

  drawFirstChart() {
    this.firstBoxPlotData =  {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[0].year + ' County ' + this.wettestCountiesData[0].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[0].values
        },
      ]
    };
    this.secondBoxPlotData =  {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[1].year + ' County ' + this.wettestCountiesData[1].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[1].values
        },
      ]
    };
    this.thirdBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[2].year + ' County ' + this.wettestCountiesData[2].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[2].values
        },
      ]
    };
    this.fourthBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[3].year + ' County ' + this.wettestCountiesData[3].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[3].values
        },
      ]
    };
    this.fifthBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[4].year + ' County ' + this.wettestCountiesData[4].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[4].values
        },
      ]
    };
    this.sixthBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[5].year + ' County ' + this.wettestCountiesData[5].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[5].values
        },
      ]
    };
    this.seventhBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[6].year + ' County ' + this.wettestCountiesData[6].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[6].values
        },
      ]
    };
    this.eighthBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[7].year + ' County ' + this.wettestCountiesData[7].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[7].values
        },
      ]
    };
    this.ninthBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[8].year + ' County ' + this.wettestCountiesData[8].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[8].values
        },
      ]
    };
    this.tenthBoxPlotData = {
      labels: this.months,
      datasets: [
        {
          label: 'Year: ' + this.wettestCountiesData[9].year + ' County ' + this.wettestCountiesData[9].county,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          outlierColor: '#999999',
          padding: 10,
          itemRadius: 0,
          data: this.wettestCountiesData[9].values
        },
      ]
    };
    this.options  = {
      legend: {
        position: 'top'
      }
    };
  }


}
