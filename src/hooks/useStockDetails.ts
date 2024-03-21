import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IStockChart, IntervalsType } from "../types";

const fetchStockDetails = async (): Promise<IStockChart> => {
  const response = await axios.get("/stock_details.json");
  return response.data;
};

export const useStockDetails = (
  interval: IntervalsType,
  startDate?: Date,
  endDate?: Date
) => {
  return useQuery<IStockChart>({
    queryKey: ["stock_details"],
    queryFn: fetchStockDetails,
    refetchInterval: !startDate && !endDate && interval * (60 * 1000),
  });
};
