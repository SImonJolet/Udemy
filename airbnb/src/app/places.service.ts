import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

import { Place } from './places/place.model';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Paris',
      'Un magnifique trois pièces avec vue sur la tour Effeil',
      'https://q-xx.bstatic.com/images/hotel/max1024x768/155/155497561.jpg',
      156,
      new Date('2019-01-01'),
      new Date ('2019-12-31'),
      '1'
    ),
    new Place(
      'p2',
      'Venise',
      'Appartement au 4e étage, très lumineux',
      'https://img-4.linternaute.com/XgC-fYZPQGbSmTLoO4e_GKd3DaU=/660x366/smart/64f33616425f4532a7d864613333af12/ccmcms-linternaute/10924262.jpg',
      130,
      new Date('2019-01-01'),
      new Date ('2019-12-31'),
      '2'
    ),
    new Place(
      'p3',
      'Berlin',
      'Loft moderne, proche du centre',
      'https://media-cdn.tripadvisor.com/media/photo-s/14/4b/16/ed/brilliant-apartments.jpg',
      99,
      new Date('2019-01-01'),
      new Date ('2019-12-31'),
      '3'
    )
  ])

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) {}

  getPlaces(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
        return { ...places.find(p => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
