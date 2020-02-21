import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferBookingpageRoutingModule } from './offer-booking-routing.module';

import { OfferBookingpage } from './offer-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBookingpageRoutingModule
  ],
  declarations: [OfferBookingpage]
})
export class OfferBookingpageModule {}
