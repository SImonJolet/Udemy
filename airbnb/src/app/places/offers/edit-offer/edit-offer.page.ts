import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  editForm: FormGroup;
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap=> {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.placeSub = this.placesService.getPlaces(paramMap.get('placeId')).subscribe(
        place => {
          this.editForm= new FormGroup({
            title: new FormControl(this.place.title, {
              updateOn: 'blur', 
             // validators: [Validators.required]
            }),
             description: new FormControl(this.place.description, {
               updateOn: 'blur',
               validators: [Validators.required, Validators.maxLength(180)]
             })
          });
        }
      );
    });
  }

  onUpdateOffer() {
    if (!this.editForm.valid){
      console.log('invalide');
      return;
    }
    console.log(this.editForm);
  }

  ngOnDestroy() {
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }
}
