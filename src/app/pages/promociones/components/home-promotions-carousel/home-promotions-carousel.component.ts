import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


interface CardDesc {
  imgFondo : string,
  imgUrl : string,
  description : string
}

@Component({
  selector: 'app-home-promotions-carousel',
  templateUrl: './home-promotions-carousel.component.html',
  styleUrls: ['./home-promotions-carousel.component.scss']
})
export class HomePromotionsCarouselComponent {

  oneStepComplete : boolean = false;
  twoStepComplete : boolean = false;
  thirdStepComplete : boolean = false;
  
  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['Complete', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    thirdCtrl : ['', Validators.required],
    fourCtrl : ['', Validators.required],
    fiftCtrl : ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  
  titleBtn : string =  'Siguiente'

  constructor(private _formBuilder: FormBuilder) {}


  infoCards : CardDesc[] = [
    {
      imgFondo : 'background-image: url( "https://multimedia.bancocuscatlan.com/assets/promociones/detalle/datos-230112_02.jpg" );',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/v1/img/promociones/logo-comercios/bancocuscatlan.png',
      description : 'Bono de 15, 000 Multipremios o LifeMiles*'
    },
    {
      imgFondo : 'background-image: url( "https://multimedia.bancocuscatlan.com/assets/promociones/detalle/cuotas-230106_02.jpg" );',
      imgUrl : 'https://multimedia.bancocuscatlan.com/assets/v1/img/promociones/logo-comercios/bancocuscatlan.png',
      description : ' Convierte tus compras realizadas en Librerías y pagos de Matrículas '
    },
  ]

  changeSelected( card : HTMLDivElement ){

    const selectedtexts = document.querySelectorAll( '.card' );

    selectedtexts.forEach(text => {
      text.classList.remove('selected-active')
    });
    card.classList.add( 'selected-active' );
    
  }

}
