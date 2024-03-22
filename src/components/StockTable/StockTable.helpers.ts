import { IStock } from "../../types";

export const getFilteredStocks = (data: Array<IStock>, query: string) => {
  return data.filter(({ symbol, name }) => {
    if (!query) return true;

    const lcQuery = query.toLowerCase();

    const matchesName =
      name && name.toLowerCase().includes(lcQuery.toLowerCase());
    const matchesSymbol = symbol && symbol.toLowerCase().includes(lcQuery);

    return matchesName || matchesSymbol;
  });
};
