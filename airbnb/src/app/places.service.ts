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

  get places() {
    return [...this._places];
  }
  constructor() { }
}
