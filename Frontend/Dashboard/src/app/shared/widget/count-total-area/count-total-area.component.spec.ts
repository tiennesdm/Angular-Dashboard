import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTotalAreaComponent } from './count-total-area.component';

describe('CountTotalAreaComponent', () => {
  let component: CountTotalAreaComponent;
  let fixture: ComponentFixture<CountTotalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountTotalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountTotalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
