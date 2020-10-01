import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd3';
  visibilityText='Hide';
  scaleBarVisibility = false;
  changeScaleBarVisibility() {
    this.visibilityText = (this.scaleBarVisibility === false)? 'Show': 'Hide';
    this.scaleBarVisibility = !this.scaleBarVisibility;
  }
}
