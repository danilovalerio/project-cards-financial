export interface Root {
  cliente: Cliente;
  saldos_disponiveis: SaldosDisponiveis;
  cartao_de_debito: CartaoDeDebito;
  cartao_de_credito: CartaoDeCredito;
}

export interface Cliente {
  itens: ICardItem[];
}

export interface SaldosDisponiveis {
  itens: ICardItem[];
  resumo_total: ResumoTotal;
}

export interface ICardItem {
  title: string;
  description: number | string;
}

export interface ResumoTotal {
  itens: ICardItem[];
}

export interface CartaoDeDebito {
  itens: ICardItem[];
}

export interface CartaoDeCredito {
  itens: ICardItem[];
}
