import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IStocksList {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

const fetchStocks = async (): Promise<Array<IStocksList>> => {
  const response = await axios.get("stocks_list.json");
  return response.data;
};

export const useGetStocks = () => {
  return useQuery<Array<IStocksList>>({
    queryKey: ["stocks_list"],
    queryFn: fetchStocks,
  });
};
