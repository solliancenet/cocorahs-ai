import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WettestCountiesComponent } from './wettest-counties.component';

describe('WettestCountiesComponent', () => {
  let component: WettestCountiesComponent;
  let fixture: ComponentFixture<WettestCountiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WettestCountiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WettestCountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
