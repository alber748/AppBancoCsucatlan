import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NameValidation } from 'src/app/utilities/validatorName';
import { CardDesc } from '../../interfaces/card-descuento';

@Component({
  selector: 'app-home-promotions-carousel',
  templateUrl: './home-promotions-carousel.component.html',
  styleUrls: ['./home-promotions-carousel.component.scss']
})
export class HomePromotionsCarouselComponent{

  firstFormGroup  = this._formBuilder.group({});

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', [Validators.required, NameValidation.isNameAndLastname]],
    thirdCtrl : ['', [Validators.required, Validators.minLength(8)]],
    fourCtrl  : ['', [Validators.required, Validators.minLength(8)]],
    fiftCtrl  : ['', [Validators.required, Validators.email]],
  });

  infoCards : CardDesc [] = 
  [
    {
      imgFondo    : 'background-image: url( "https://multimedia.bancocuscatlan.com/assets/promociones/detalle/datos-230112_02.jpg" );',
      imgUrl      : 'https://multimedia.bancocuscatlan.com/assets/v1/img/promociones/logo-comercios/bancocuscatlan.png',
      description : 'Bono de 15, 000 Multipremios o LifeMiles*'
    },
    {
      imgFondo    : 'background-image: url( "https://multimedia.bancocuscatlan.com/assets/promociones/detalle/cuotas-230106_02.jpg" );',
      imgUrl      : 'https://multimedia.bancocuscatlan.com/assets/v1/img/promociones/logo-comercios/bancocuscatlan.png',
      description : ' Convierte tus compras realizadas en Librerías y pagos de Matrículas '
    },
  ];

  constructor(private _formBuilder: FormBuilder) {};

  changeSelected( card : HTMLDivElement ){

    const cardsOption = document.querySelectorAll( '.card' );

    cardsOption.forEach(card => {
      card.classList.remove('selected-active');
    });

    card.classList.add( 'selected-active' );
    
  }

  validarInputText( control: FormControl<string | null> ){

    const value = control.value;

    for (const key in [1,2,3,4,5,6,7,8,9,0]) {
      if( value?.includes( key )  ){
        control.reset( value?.slice(0, -1) );  
      }
    }
  }

  validarInputNumber( control: FormControl<string | null> ){

    const value             = control.value;
    const expRegSoloNumeros = "^[0-9]+$";

    if( !(value?.match(expRegSoloNumeros)!=null) || value.length > 8 ){
      control.reset( value?.slice(0, -1) ); 
    }
  }
}
