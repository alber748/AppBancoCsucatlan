import { Component, ViewEncapsulation, Input } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, SwiperOptions, Swiper } from "swiper";
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


  config: SwiperOptions = {

    slidesPerView : 6,
    navigation: true,
    spaceBetween: 30,
    loop : false,
    loopFillGroupWithBlank : true,
    breakpoints : {

        350: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        916: {
          slidesPerView: 3,
        },
        1224: {
          slidesPerView: 4,
        },
        1524: {
          slidesPerView: 5,
        },
        1800: {
          slidesPerView: 6,
        }
    }
  }

  constructor(){

  }

  @Input() dataCards!: debitCard [];

  public cards! : debitCard []; 

  ngOnInit(): void {
    this.cards = this.dataCards
  }

}
