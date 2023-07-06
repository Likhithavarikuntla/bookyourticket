import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-ticketbooking',
  templateUrl: './flight-ticketbooking.component.html',
  styleUrls: ['./flight-ticketbooking.component.css']
})
export class FlightTicketbookingComponent {

  starting:any;
 destination:any;
 doj:any;
 dor:any;
 passcount:any;
 seatingclass:any;
  bookingobj:any;

 constructor(private service:FlightService, private router:Router){}

  booknow(){
    this.bookingobj={
      starting:this.starting,
      destination:this.destination,
      doj:this.doj,
      dor:this.dor,
      passcount:this.passcount,
      seatingclass:this.seatingclass,
      isEdit:false
    }
    console.table(this.bookingobj)
    this.service.booknow(this.bookingobj);
    this.router.navigateByUrl("/user/bookingstatus")
  }
update(book:any){
  book.isEdit=false;
  this.service.update(book);
}
delete(book:any){
  this.service.delete(book);
}
paymentt(book:any){
  this.service.paymentt(book);
}

}
