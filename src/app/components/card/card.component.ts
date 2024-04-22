import { ICardHeader } from './../../models/card-header.interface';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cliente, ICardItem, SaldosDisponiveis } from '../../models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input({ required: false }) header: ICardHeader = {} as ICardHeader;
  @Input({ required: false }) itens: ICardItem[] = {} as ICardItem[];
  @Input({ required: false }) backGroundColor: string = 'orange';

  cardItens!: ICardItem[];

  cardHeader!: ICardHeader;

  bgColor: string = 'orange';

  ngOnInit(): void {
    this.cardHeader = this.header;
    this.cardItens = this.itens;
    this.bgColor = this.backGroundColor;
  }
}
