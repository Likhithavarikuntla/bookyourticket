import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExocticTicketbookingComponent } from './exoctic-ticketbooking.component';

describe('ExocticTicketbookingComponent', () => {
  let component: ExocticTicketbookingComponent;
  let fixture: ComponentFixture<ExocticTicketbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExocticTicketbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExocticTicketbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
