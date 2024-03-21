import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IStock } from "../types";

const fetchStocksList = async (): Promise<Array<IStock>> => {
  const response = await axios.get("/stocks_list.json");
  return response.data;
};

export const useStocksList = () => {
  return useQuery<Array<IStock>>({
    queryKey: ["stocks_list"],
    queryFn: fetchStocksList,
  });
};
