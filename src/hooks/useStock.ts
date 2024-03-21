import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IStock } from "../types";

const fetchStock = async (symbol: string | undefined): Promise<IStock> => {
  const response = await axios.get(
    `https://api.twelvedata.com/stocks?symbol=${symbol}&source=docs&exchange=NYSE`
  );
  return response.data.data?.[0];
};

export const useStock = (symbol: string | undefined) => {
  return useQuery({ queryKey: ["stock"], queryFn: () => fetchStock(symbol) });
};
