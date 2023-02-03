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
      categoria : 'MultiPremios'
    },
    {
      title : 'Debito Oro ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-3.png',
      backgroundImg : 'dark-bc',
      categoria : 'multiPremios'
    },
    {
      title : 'Debito Platinum ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-1.png',
      backgroundImg : 'blue-grey-bc',
      categoria : 'MultiPremios'
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
      categoria : 'Otras'
    },
    {
      title : 'Tarjeta Pago',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Pago.png',
      backgroundImg : 'blue-bc',
      categoria : 'Otras'
    }
  ]

  public cardsDebito : debitCard[] = [
    {
      title : 'Debito Clasica ',
      subtitulo : 'Multipremios',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum.png',
      backgroundImg : 'blue-bc',
      categoria : 'MultiPremios'
    },
    {
      title : 'Debito Oro ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-3.png',
      backgroundImg : 'dark-bc',
      categoria : 'MultiPremios'
    },
    {
      title : 'Debito Platinum ',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Platinum-1.png',
      backgroundImg : 'blue-grey-bc',
      categoria : 'MultiPremios'
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
      categoria : 'Otras'
    },
    {
      title : 'Tarjeta Pago',
      subtitulo : 'CUSCATLAN',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/debito/Carrusel/Mastercard_Multipremios_Pago.png',
      backgroundImg : 'blue-bc',
      categoria : 'Otras'
    }
  ]

  constructor() { }


  setCardsDebito() {
    return this.cardsDebito;
  }

  filtradoCardsDebito( filter : string){
    this.cardsDebito = this.cardsDebitoPermanente.filter(card => card.categoria === filter);
    console.log( this.cardsDebito);
  }

}
