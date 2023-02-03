import { Component } from '@angular/core';
import { ActivatedRoute, Event, Router, RouterLink, RouterModule } from '@angular/router';
import { TarjetasService } from '../../services/tarjetas.service';
import { DeDebitoComponent } from '../../pages/de-debito/de-debito.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {


  constructor( private tarjetasService : TarjetasService ){

  }

  changeCards(element : HTMLDivElement ){

    const elements = document.querySelectorAll( '.general-filter__item' );

    elements.forEach(el => {
      el.classList.remove('item-filter-clicked');
    });
    element.classList.add( 'item-filter-clicked' );

    const filter = element.getAttribute('filter');

    this.tarjetasService.filtradoCardsDebito( filter! );

  }

}
