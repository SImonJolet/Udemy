import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferBookingpage } from './offer-booking.page';

const routes: Routes = [
  {
    path: '',
    component: OfferBookingpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferBookingpageRoutingModule {}
