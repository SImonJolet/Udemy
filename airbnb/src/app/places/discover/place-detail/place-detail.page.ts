import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  NavController, 
  ModalController,
  ActionSheetController 
} from '@ionic/angular';

import { Place } from '../../place.model';
import { PlacesService } from 'src/app/places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController, 
    private actionSheetCtrl: ActionSheetController, 
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
     this.placeSub = this.placesService.getPlaces(paramMap.get('placeId')).subscribe(places => {
       this.place = places; 
     })
    });
    
  }
  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    //this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    this.actionSheetCtrl
      .create({
        header: 'Choose an Action', 
        buttons: [
          {
            text:'Select Date', 
            handler: () => {
              this.openBookingMopdal('select')
            }
          },
          {
            text:'Random Date',
            handler: () => {
              this.openBookingMopdal('random')

            }  
          },
          {
            text:'Cancel',
            role: 'cancel'
          }
        ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  openBookingMopdal( mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place, selectedMode: mode}
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'Confirmer'){
        console.log('CONFIRMER!');
      }
    })
  } 
  ngOnDestroy() {
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }
}
