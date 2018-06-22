import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetdetailsComponent } from './betdetails.component';

describe('BetdetailsComponent', () => {
  let component: BetdetailsComponent;
  let fixture: ComponentFixture<BetdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
