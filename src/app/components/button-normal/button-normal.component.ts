import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-normal',
  templateUrl: './button-normal.component.html',
  styleUrls: ['./button-normal.component.scss']
})
export class ButtonNormalComponent {

  @Input() titleBtn: string = '';

  constructor(){}

}
