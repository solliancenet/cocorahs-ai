import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chartVisibility = [false, false, false];
  visibilityText = ['Show', 'Show', 'Show', 'Show'];

  public selectedYear = 2017;
  public years = [2017, 2018, 2019];
  changeChartVisibility(chartIndex: number) {
    this.chartVisibility[chartIndex] = !this.chartVisibility[chartIndex];
    this.visibilityText[chartIndex] = (this.chartVisibility[chartIndex] === false) ? 'Show' : 'Hide';
  }
}
