import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { TrainService } from '../services/train.service';
import { ExocticService } from '../services/exoctic.service';

@Component({
  selector: 'app-bookingstatus',
  templateUrl: './bookingstatus.component.html',
  styleUrls: ['./bookingstatus.component.css']
})
export class BookingstatusComponent {
  bookings:any;
  tickets:any;
  exoctic:any;
  constructor(private service:FlightService,private services:TrainService,private eservice:ExocticService){}
  isEditcontent(book:any){
    book.isEdit=true;
  }
  isEdit(ticket:any){
    ticket.isEdit=true;
  }
  isEditcont(exoctic:any){
     exoctic.isEdit=true;
  }
  

  update(book:any){
    book.isEdit=false;
    this.service.update(book);

  }
  updatee(ticket:any){
    ticket.isEdit=false;
    this.service.update(ticket);

  }
  updat(exoctic:any){
    exoctic.isEdit=false;
    this.service.update(exoctic);
  }

  delete(book:any){
    this.service.delete(book);
  }
  deletee(ticket:any){
    this.services.delete(ticket);
  }
  delet(exoctic:any){
    this.eservice.delet(exoctic);
  }
  paymentt(book:any){
    alert("payment successfull")
  }
  payment(ticket:any){
  alert("payment successfull")
  }
  paymen(exoctic:any){
    alert("payment succesfull")
  }
  ngOnInit(){
    this.service.viewBookings().subscribe((res)=>{
      this.bookings=res;
     
    })
    this.services.viewBookings().subscribe((k)=>{
      this.tickets=k;
      
    })
    this.eservice.viewBookings().subscribe((result)=>{
      this.exoctic=result;
      
    })
    
      
    }
  }
 
  
 
    
  

