import { Component, Input, OnInit } from '@angular/core';
import {
  ItemCardExemplo,
  RespDadosDisponiveis,
  responseFromApi,
} from './data/response';
import {
  Root,
  Cliente,
  SaldosDisponiveis,
  CartaoDeDebito,
  CartaoDeCredito,
  ICardItem,
} from './models/models';
import { ICardHeader } from './models/card-header.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @Input({ required: false }) cliente: Cliente[] = {} as Cliente[];
  @Input({ required: false }) saldosDisponiveis: SaldosDisponiveis[] =
    {} as SaldosDisponiveis[];
  @Input({ required: false }) cartaoDeDebito: CartaoDeDebito[] =
    {} as CartaoDeDebito[];
  @Input({ required: false }) cartaoDeCredito: CartaoDeCredito[] =
    {} as CartaoDeCredito[];

  title = 'project-cards-financial';
  dataLoad: Root = {} as Root;

  itensSaldo: ICardItem[] = {} as ICardItem[];
  itemSaldo: ICardItem = {} as ICardItem;

  saldosDisponiveisHeader: ICardHeader = {
    title: 'Saldos Disponíveis',
    description: '',
    iconSrc: 'assets/icons/icon-credit-card.png',
  };

  saldosDisponiveisLoad: SaldosDisponiveis = {} as SaldosDisponiveis;

  ngOnInit(): void {
    this.dataLoad = responseFromApi;
    console.log('Dados carregados: ' + JSON.stringify(this.dataLoad));
    console.log(
      'Nome: ' + JSON.stringify(this.dataLoad.saldos_disponiveis.itens)
    );

    /*this.itemSaldo = ItemCardExemplo[0];
    this.itensSaldo = ItemCardExemplo;
    console.log('item :' + JSON.stringify(this.itemSaldo));
    console.log('itens :' + JSON.stringify(this.itensSaldo));*/

    this.saldosDisponiveisLoad = this.dataLoad.saldos_disponiveis;
  }
}
