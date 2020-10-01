import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ScaleBar2017Component } from './components/scale-bar2017/scale-bar2017.component';
import { ScaleBar2019Component } from './components/scale-bar2019/scale-bar2019.component';
import { ScaleBar2018Component } from './components/scale-bar2018/scale-bar2018.component';


@NgModule({
  declarations: [
    AppComponent,
    ScaleBar2017Component,
    ScaleBar2017Component,
    ScaleBar2018Component,
    ScaleBar2019Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
