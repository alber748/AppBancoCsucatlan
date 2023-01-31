import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  changeCards(element : HTMLDivElement ){

    const elements = document.querySelectorAll( '.general-filter__item' );

    elements.forEach(el => {
      el.classList.remove('item-filter-clicked');
    });
    element.classList.add( 'item-filter-clicked' );

  }

}
