import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Place } from '../../place.model';
import { PlacesService } from 'src/app/places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingpage implements OnInit, OnDestroy {
  place: Place;
  private placeSub : Subscription;


  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService
  ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }else {
        this.placeSub = this.placeService.getPlaces(paramMap.get('placeId')).subscribe( places => {
          this.place = places
        })
      }
    })
    
  }
  
  ngOnDestroy() {
    if(this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
  

}

