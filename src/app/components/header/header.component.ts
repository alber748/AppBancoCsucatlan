import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{

  public titleBtn : string = 'Iniciar Sesión';

  @ViewChild('menuMobile') menuMobile! : ElementRef;

  constructor(  ){

  }

  ngOnInit(): void {}

  showMenuMobile(){

    let menuElement : HTMLElement = this.menuMobile.nativeElement;

    menuElement.classList.toggle('options-menu-mobile-active');


    const iconsMenu = document.querySelectorAll('.icon-menu');

    iconsMenu.forEach(icon => {
      icon.classList.toggle( 'icon-menu-active' );
    });

  }


  changeIconMenu(  numberElement : string | null ){

    const icons = document.querySelectorAll(`.icons-data-${numberElement}`)

    icons.forEach(icon => {
      icon.classList.toggle( 'icon-active' );
    });

    console.log( icons )
  }

  expandOptions( spanClicked : HTMLSpanElement ){

    const numberElement = spanClicked.getAttribute('data-tarjet');
    const linksList = document.querySelectorAll( '.more-links' );

    linksList.forEach( link => {
      console.log( link.getAttribute('data-tarjet'), numberElement )

      if( link.getAttribute('data-tarjet') === numberElement ){
        link.classList.toggle('list-links-active');
      }

    } );

    this.changeIconMenu( numberElement )
  }

}