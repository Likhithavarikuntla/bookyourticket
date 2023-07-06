import { Component } from '@angular/core';
import { TrainService } from '../services/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-ticketbooking',
  templateUrl: './train-ticketbooking.component.html',
  styleUrls: ['./train-ticketbooking.component.css']
})
export class TrainTicketbookingComponent {
  imgsrc="https://images.moneycontrol.com/static-mcnews/2021/08/Indian-Railways-770x433.jpg?impolicy=website&width=770&height=431"
  starting:any;
  destination:any;
  doj:any;
  dor:any;
  passcount:any;
  seatingclass:any;
   bookingobj:any
 
  constructor(private service:TrainService, private router:Router){}
 
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
     
     this.service.booknow(this.bookingobj);
     this.router.navigateByUrl("/user/bookingstatus")
   }
 
   update(ticket:any){
    ticket.isEdit=false;
    this.service.update(ticket);
  }
  delete(ticket:any){
    this.service.delete(ticket);
  }
  
  
}
