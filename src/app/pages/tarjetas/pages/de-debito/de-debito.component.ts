import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { debitCard } from '../../interfaces/debit-card-interface';
import { TarjetasService } from '../../services/tarjetas.service';

@Component({
  selector: 'app-de-debito',
  templateUrl: './de-debito.component.html',
  styleUrls: ['./de-debito.component.scss']
})
export class DeDebitoComponent implements OnInit{

  public cardsDebito! : debitCard[]

  constructor( private tarjetasService : TarjetasService ){

  }

  ngOnInit() : void{

    this.cardsDebito = this.tarjetasService.cardsDebito;
  }


}
