import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsAverageComponent } from './us-average.component';

describe('UsAverageComponent', () => {
  let component: UsAverageComponent;
  let fixture: ComponentFixture<UsAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
