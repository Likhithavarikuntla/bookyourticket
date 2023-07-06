import { Injectable } from '@angular/core';
import { of} from 'rxjs';
import { exoctic } from './exoctic';

@Injectable({
  providedIn: 'root'
})
export class ExocticService {
  exocticBookingList:exoctic[]=[];
  constructor() { }

  booknow(booking:any){
    this.exocticBookingList.push(booking);
  }

  viewBookings(){
    return of (this.exocticBookingList);
  }
  updat(exoctic:any){
    this.exocticBookingList.forEach((liki,ind)=>{
      if(liki.starting==exoctic.starting){
        this.exocticBookingList.splice(ind,1,exoctic)
      }
    })
  }
  delet(exoctic:any){
    this.exocticBookingList.forEach((liki,ind)=>
    {
      if(liki.starting==exoctic.starting){
        this.exocticBookingList.splice(ind,1)
      }
    })
  }
  paymen(exoctic:any){
    this.exocticBookingList;
  }

}
