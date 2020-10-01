import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBar2019Component } from './scale-bar2019.component';

describe('ScaleBar2019Component', () => {
  let component: ScaleBar2019Component;
  let fixture: ComponentFixture<ScaleBar2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBar2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBar2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
