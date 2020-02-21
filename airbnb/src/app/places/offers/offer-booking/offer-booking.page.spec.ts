import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferBookingpage } from './offer-booking.page';

describe('OfferBookingpage', () => {
  let component: OfferBookingpage;
  let fixture: ComponentFixture<OfferBookingpage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBookingpage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferBookingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
