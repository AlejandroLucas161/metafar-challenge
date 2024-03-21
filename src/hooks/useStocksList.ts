import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IStock } from "../types";

const fetchStocksList = async (): Promise<Array<IStock>> => {
  const response = await axios.get(
    "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE"
  );
  return response.data.data;
};

export const useStocksList = () => {
  return useQuery<Array<IStock>>({
    queryKey: ["stocks_list"],
    queryFn: fetchStocksList,
  });
};
