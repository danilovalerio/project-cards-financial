import { Component } from '@angular/core';
import { ICardHeader } from '../../models/card-header.interface';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {
  header: ICardHeader = {
    title: 'Card Exemplo',
    description: 'R$ 123,00',
    iconSrc: 'assets/icons/icon-credit-card.png',
  };
}
