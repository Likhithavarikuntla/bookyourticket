import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTicketbookingComponent } from './flight-ticketbooking.component';

describe('FlightTicketbookingComponent', () => {
  let component: FlightTicketbookingComponent;
  let fixture: ComponentFixture<FlightTicketbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTicketbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTicketbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
