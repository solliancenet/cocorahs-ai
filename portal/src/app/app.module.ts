import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ScaleBar2017Component } from './components/scale-bar2017/scale-bar2017.component';
import { ScaleBar2019Component } from './components/scale-bar2019/scale-bar2019.component';
import { ScaleBar2018Component } from './components/scale-bar2018/scale-bar2018.component';
import { ScaleBarHeatmapComponent } from './components/scale-bar-heatmap/scale-bar-heatmap.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WettestCountiesComponent } from './components/wettest-counties/wettest-counties.component';
import { HighchartsChartModule } from 'highcharts-angular';
import 'chartjs-chart-box-and-violin-plot';
import { ChartModule } from 'angular2-chartjs';
import { UsAverageComponent } from './components/us-average/us-average.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ScaleBar2017Component,
    ScaleBar2017Component,
    ScaleBar2018Component,
    ScaleBar2019Component,
    ScaleBarHeatmapComponent,
    WettestCountiesComponent,
    UsAverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    HighchartsChartModule,
    ChartModule,
    ChartsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
