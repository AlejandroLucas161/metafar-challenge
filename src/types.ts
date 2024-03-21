export type IntervalsType = 1 | 5 | 15;

/* ------------------------------------------ */

export interface IStock {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

/* ------------------------------------------ */

export interface IStockChart {
  meta: IStockDetails;
  values: Array<IStockValue>;
}

export interface IStockDetails {
  symbol: string;
  interval: string;
  currency: string;
  exchange_timezone: string;
  exchange: string;
  mic_code: string;
  type: string;
}

export interface IStockValue {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
