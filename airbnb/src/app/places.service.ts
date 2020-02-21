import { Injectable } from '@angular/core';

import {Place} from './places/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[]= [
    new Place(
      'p1', 
      'Liege', 
      'Chez moi', 
      'https://cdn.wbtourisme.be/sites/default/files/styles/content_slider/public/_DSF7712.jpg?itok=TePb87fE&hash=c99512fce8bd14c77c0327f15255d8b9b0b3f5758f7f61fde34e1b7c15759e60&c=a50e4f7a73c5cc12e1aaeee78d4b51ed',
      200
    ),
    new Place(
      'p2',
      'Embourg',
      'Boulot',
      'https://pbs.twimg.com/profile_images/378800000666033656/a02b0cdd29925de7ff6aa584625f0dd2_400x400.png',
      300
    ),
    new Place(
      'p3',
      'BX',
      'Odette',
      'https://sofitel.accor.com/destinations/imagerie/centrehistorique-bordeaux-600x500px-c44a.jpg',
      400
    )
];

  private _offers : Place[]= [
    new Place(
      'o1',
      'Paris',
      'Un magnifique trois pièces avec vue sur la tour Effeil',
      'https://q-xx.bstatic.com/images/hotel/max1024x768/155/155497561.jpg',
      156
    ),
    new Place(
      'o2',
      'Venise',
      'Appartement au 4e étage, très lumineux',
      'https://img-4.linternaute.com/XgC-fYZPQGbSmTLoO4e_GKd3DaU=/660x366/smart/64f33616425f4532a7d864613333af12/ccmcms-linternaute/10924262.jpg',
      130
    ),
    new Place(
      'o3',
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
