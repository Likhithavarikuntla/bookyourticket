import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTicketbookingComponent } from './train-ticketbooking.component';

describe('TrainTicketbookingComponent', () => {
  let component: TrainTicketbookingComponent;
  let fixture: ComponentFixture<TrainTicketbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainTicketbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainTicketbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
