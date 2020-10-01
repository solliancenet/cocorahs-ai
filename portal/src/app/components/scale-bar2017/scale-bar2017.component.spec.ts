import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBar2017Component } from './scale-bar2017.component';

describe('ScaleBar2017Component', () => {
  let component: ScaleBar2017Component;
  let fixture: ComponentFixture<ScaleBar2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBar2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBar2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
