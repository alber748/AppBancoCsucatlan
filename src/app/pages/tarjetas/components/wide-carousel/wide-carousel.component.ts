import { Component, ViewEncapsulation, Input } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { debitCard } from "../../interfaces/debit-card-interface";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-wide-carousel',
  templateUrl: './wide-carousel.component.html',
  styleUrls: ['./wide-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WideCarouselComponent {


  @Input() dataCards!: debitCard [];

  public cards! : debitCard []; 

  ngOnInit(): void {
    this.cards = this.dataCards
  }

}
