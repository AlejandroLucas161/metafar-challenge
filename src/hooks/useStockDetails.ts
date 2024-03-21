import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IStockChart } from "../types";

const fetchStockDetails = async (): Promise<IStockChart> => {
  const response = await axios.get("/stock_details.json");
  return response.data;
};

export const useStockDetails = () => {
  return useQuery<IStockChart>({
    queryKey: ["stock_details"],
    queryFn: fetchStockDetails,
  });
};
