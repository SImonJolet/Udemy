import { Injectable } from '@angular/core';

import {Place} from './places/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
 

  private _places : Place[]= [
    new Place(
      'p1',
      'Paris',
      'Un magnifique trois pièces avec vue sur la tour Effeil',
      'https://q-xx.bstatic.com/images/hotel/max1024x768/155/155497561.jpg',
      156
    ),
    new Place(
      'p2',
      'Venise',
      'Appartement au 4e étage, très lumineux',
      'https://img-4.linternaute.com/XgC-fYZPQGbSmTLoO4e_GKd3DaU=/660x366/smart/64f33616425f4532a7d864613333af12/ccmcms-linternaute/10924262.jpg',
      130
    ),
    new Place(
      'p3',
      'Berlin',
      'Loft moderne, proche du centre',
      'https://media-cdn.tripadvisor.com/media/photo-s/14/4b/16/ed/brilliant-apartments.jpg',
      99
    )
  ]

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlaces(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
  
}
