import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { HomeComponent } from './home/home.component';
import { FlightTicketbookingComponent } from './flight-ticketbooking/flight-ticketbooking.component';
import { TrainTicketbookingComponent } from './train-ticketbooking/train-ticketbooking.component';

import { ExocticTicketbookingComponent } from './exoctic-ticketbooking/exoctic-ticketbooking.component';
import { BookingstatusComponent } from './bookingstatus/bookingstatus.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
    },
    
    {
    path:"user",
    component:HeadernavComponent,
    children:[
      {
        path:"home",
        component:HomeComponent
      },
    {
      path:"flight-tickets-booking",
      component:FlightTicketbookingComponent
    },
    {
      path:"train",
      component:TrainTicketbookingComponent
    },
    
    {
      path:"exotic",
      component:ExocticTicketbookingComponent
    },

  {
    path:"bookingstatus",
    component:BookingstatusComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
  path:"footer",
  component:FooterComponent
  }

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
