import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../../models/card-item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) itens: ICardItem[] = {} as ICardItem[];

  cardItens!: ICardItem[];

  cardHeader = {
    title: 'Teste',
    description: 'sdfasdfa',
    iconSrc: 'assets/icons/icon-credit-card.png',
  };

  ngOnInit(): void {
    this.cardItens = this.itens;
  }
}
