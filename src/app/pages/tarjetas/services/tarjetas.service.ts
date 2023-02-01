import { Injectable } from '@angular/core';
import { debitCard } from '../interfaces/debit-card-interface';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {


  public cardsDebitoPermanente : debitCard[] = [
    {
      title : 'Debito Clasica ',
      subtitulo : 'Multipremios',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum.png',
      backgroundImg : 'blue-bc',
      categoria : 'multipremios'
    },
    {
      title : 'Debito Oro ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-3.png',
      backgroundImg : 'dark-bc',
      categoria : 'multipremios'
    },
    {
      title : 'Debito Platinum ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-1.png',
      backgroundImg : 'blue-grey-bc',
      categoria : 'multipremios'
    },
    {
      title : 'Debito LifeMiles CUSCATLAN',
      subtitulo : 'Clásica',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/lifemiles-clasica.jpg',
      backgroundImg : 'blue-bc',
      categoria : 'LifeMiles'
    },
    {
      title : 'Debito LifeMiles CUSCATLAN',
      subtitulo : 'ORO',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-2.png',
      backgroundImg : 'dark-bc',
      categoria : 'LifeMiles'
    },
    {
      title : 'Tarjeta Prepago',
      subtitulo : 'Recargable',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-4.png',
      backgroundImg : 'blue-light-bc',
      categoria : 'otras'
    },
    {
      title : 'Tarjeta Pago',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Pago.png',
      backgroundImg : 'blue-bc',
      categoria : 'otras'
    }
  ]

  public cardsDebito : debitCard[] = [
    {
      title : 'Debito Clasica ',
      subtitulo : 'Multipremios',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum.png',
      backgroundImg : 'blue-bc',
      categoria : 'multipremios'
    },
    {
      title : 'Debito Oro ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-3.png',
      backgroundImg : 'dark-bc',
      categoria : 'multipremios'
    },
    {
      title : 'Debito Platinum ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-1.png',
      backgroundImg : 'blue-grey-bc',
      categoria : 'multipremios'
    },
    {
      title : 'Debito LifeMiles CUSCATLAN',
      subtitulo : 'Clásica',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/lifemiles-clasica.jpg',
      backgroundImg : 'blue-bc',
      categoria : 'LifeMiles'
    },
    {
      title : 'Debito LifeMiles CUSCATLAN',
      subtitulo : 'ORO',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-2.png',
      backgroundImg : 'dark-bc',
      categoria : 'LifeMiles'
    },
    {
      title : 'Tarjeta Prepago',
      subtitulo : 'Recargable',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-4.png',
      backgroundImg : 'blue-light-bc',
      categoria : 'otras'
    },
    {
      title : 'Tarjeta Pago',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Pago.png',
      backgroundImg : 'blue-bc',
      categoria : 'otras'
    }
  ]

  constructor() { }


  setCardsDebito() {
    return this.cardsDebito;
  }
}
