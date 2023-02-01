import { Component, Input, OnInit } from '@angular/core';
import { debitCard } from '../../interfaces/debit-card-interface';

@Component({
  selector: 'app-image-debit-card',
  templateUrl: './image-debit-card.component.html',
  styleUrls: ['./image-debit-card.component.scss']
})

export class ImageDebitCardComponent implements OnInit {

  @Input() dataCards!: debitCard;

  public card! : debitCard ; 

  ngOnInit(): void {
    this.card = this.dataCards
  }

}
