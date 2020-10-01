import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBarHeatmapComponent } from './scale-bar-heatmap.component';

describe('ScaleBarHeatmapComponent', () => {
  let component: ScaleBarHeatmapComponent;
  let fixture: ComponentFixture<ScaleBarHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBarHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBarHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
