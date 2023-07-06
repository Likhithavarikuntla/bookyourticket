import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExocticService } from '../services/exoctic.service';

@Component({
  selector: 'app-exoctic-ticketbooking',
  templateUrl: './exoctic-ticketbooking.component.html',
  styleUrls: ['./exoctic-ticketbooking.component.css']
})
export class ExocticTicketbookingComponent {
  starting:any;
   passcount:any;
  seatingclass:any;
   bookingobj:any;
 
  constructor(private service:ExocticService, private router:Router){}
 
   booknow(){
     this.bookingobj={
       starting:this.starting,
       
       passcount:this.passcount,
       seatingclass:this.seatingclass,
     }
     console.table(this.bookingobj)
     this.service.booknow(this.bookingobj);
     this.router.navigateByUrl("/user/bookingstatus")
   }
   updat(exoctic:any){
    exoctic.isEdit=false;
    this.service.updat(exoctic);
  }
  delet(exoctic:any){
    this.service.delet(exoctic);
  }
  paymen(exoctic:any){
    this.service.paymen(exoctic);
  }
 
}
