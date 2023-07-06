import { Injectable } from '@angular/core';
import { flight } from './flight';
import { of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightBookingList:flight[]=[];
  constructor() { }

  booknow(booking:any){
    this.flightBookingList.push(booking);
  }

  viewBookings(){
    return of (this.flightBookingList);
  }
update(book:any){
  this.flightBookingList.forEach((liki,ind)=>{
    if(liki.starting==book.starting){
      this.flightBookingList.splice(ind,1,book)
    }
  })
}
delete(book:any){
  this.flightBookingList.forEach((liki,ind)=>
  {
    if(liki.starting==book.starting){
      this.flightBookingList.splice(ind,1)
    }
  })
}
paymentt(book:any){
  this.flightBookingList;
}
}
