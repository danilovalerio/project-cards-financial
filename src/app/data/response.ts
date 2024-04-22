import { ICardHeader } from '../models/card-header.interface';
import { Root, SaldosDisponiveis } from '../models/models';

export const CardsHeader: ICardHeader[] = [
  {
    title: 'Saldos Disponíveis',
    description: 'R$ 100,00',
    iconSrc: 'assets/icons/oc',
  },
  {
    title: 'Cartão de Crédito',
    description: '',
    iconSrc: 'assets/icons/icon-hand.png',
  },
];

export const responseFromApi: Root = {
  cliente: {
    itens: [
      { title: 'nome', description: 'João da Silva Neto' },
      { title: 'idade', description: 37 },
    ],
  },
  saldos_disponiveis: {
    itens: [
      { title: 'Corrente', description: 200.0 },
      { title: 'Corrente Saldo Vinculado', description: 200.0 },
      { title: 'Poupançca Saldo Vinculado', description: 200.0 },
      { title: 'Investimento com baixa automatica', description: 200.0 },
      { title: 'Investimento sem baixa automatica', description: 200.0 },
    ],
    resumo_total: {
      itens: [
        { title: 'Saldo Total', description: 1000 },
        { title: 'Livre Movimentacao', description: 1100 },
      ],
    },
  },
  cartao_de_debito: {
    itens: [],
  },
  cartao_de_credito: {
    itens: [
      { title: 'limite_compra', description: 1000 },
      { title: 'disponivel', description: 1000 },
      { title: 'limite_saque', description: 1000 },
      { title: 'saque_disponivel', description: 1000 },
      { title: 'limite_total_utilizado', description: 1000 },
    ],
  },
};

export const RespDadosDisponiveis: SaldosDisponiveis = {
  itens: [
    { title: 'cc', description: 200.0 },
    { title: 'cc_saldo_vinculado', description: 200.0 },
    { title: 'cp_saldo_vinculado', description: 200.0 },
    { title: 'investimento_com_baixa_automatica', description: 200.0 },
    { title: 'investimento_sem_baixa_automatica', description: 200.0 },
  ],
  resumo_total: {
    itens: [
      { title: 'saldo_total', description: 1000 },
      { title: 'livre_movimentacao', description: 1000 },
    ],
  },
};

export const ItemCardExemplo = [
  {
    title: 'cc',
    description: 200.0,
  },
  {
    title: 'cc_saldo_vinculado',
    description: 200.0,
  },
];
