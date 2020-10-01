import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBar2018Component } from './scale-bar2018.component';

describe('ScaleBar2018Component', () => {
  let component: ScaleBar2018Component;
  let fixture: ComponentFixture<ScaleBar2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBar2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBar2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
