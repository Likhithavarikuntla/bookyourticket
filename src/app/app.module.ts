import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FlightTicketbookingComponent } from './flight-ticketbooking/flight-ticketbooking.component';
import { TrainTicketbookingComponent } from './train-ticketbooking/train-ticketbooking.component';
import { ExocticTicketbookingComponent } from './exoctic-ticketbooking/exoctic-ticketbooking.component';

import { BookingstatusComponent } from './bookingstatus/bookingstatus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeadernavComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    FlightTicketbookingComponent,
    TrainTicketbookingComponent,
    ExocticTicketbookingComponent,
   
    BookingstatusComponent,
    CheckoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
