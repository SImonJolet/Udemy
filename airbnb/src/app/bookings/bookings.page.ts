import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingService } from './bookings.service';
import { Booking } from './bookings.model';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: Booking[]
  private bookingSub: Subscription;

  constructor(
    private bookingService : BookingService
  ) { }

  ngOnInit() {
   this.bookingSub = this.bookingService.bookings.subscribe(bookings => {
      this.loadedBookings = bookings;
    })
  }
  onCancelBooking(offerId: string, slidingBooking: IonItemSliding) {  
    slidingBooking.close();

  }

  ngOnDestroy() {
    if(this.bookingSub){
      this.bookingSub.unsubscribe();
    }  
  }

}
