import { Injectable } from "@angular/core";
import { Booking } from './bookings.model';

@Injectable ({ providedIn: 'root'})
export class BookingService {
    private _bookings: Booking[] = [
        {
            id: "xyz",
            placeId: 'p1',
            placeTitle: 'Paris',
            guestNumber: 2,
            userId:'abc'
        }
    ];

    get bookings() {
        return [...this._bookings];
    }
}