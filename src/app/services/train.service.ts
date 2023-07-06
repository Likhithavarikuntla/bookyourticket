import { Injectable } from '@angular/core';
import { train } from './train';
import { of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  trainBookingList:train[]=[];
  constructor() { }

  booknow(booking:any){
    this.trainBookingList.push(booking);
  }

  viewBookings(){
    return of (this.trainBookingList);
  }
  update(ticket:any){
    this.trainBookingList.forEach((liki,ind)=>{
      if(liki.starting==ticket.starting){
        this.trainBookingList.splice(ind,1,ticket)
      }
    })
  }
  delete(ticket:any){
    this.trainBookingList.forEach((liki,ind)=>
    {
      if(liki.starting==ticket.starting){
        this.trainBookingList.splice(ind,1)
      }
    })
  }
}
