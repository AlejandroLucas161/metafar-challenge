import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IStockChart, IntervalsType } from "../types";
import { Dayjs } from "dayjs";
import { StockVariant } from "../components/StockDetail/StockDetail";

const API_KEY = import.meta.env.VITE_TWELVEDATA_API_KEY;

type fetchStockDetailsParams = {
  variant: StockVariant;
  symbol: string;
  interval: IntervalsType;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

const fetchStockDetails = async (
  params: fetchStockDetailsParams
): Promise<IStockChart> => {
  const { symbol, interval, startDate, endDate } = params;
  const urlParams = new URLSearchParams();
  urlParams.set("symbol", symbol);
  urlParams.set("interval", `${interval}min`);

  if (startDate && endDate) {
    urlParams.set("start_date", startDate.format());
    urlParams.set("end_date", endDate.format());
  }

  urlParams.set("apikey", API_KEY);

  const response = await axios.get(
    `https://api.twelvedata.com/time_series?outputsize=15&${urlParams.toString()}`
  );
  return response.data;
};

export const useStockDetails = (params: fetchStockDetailsParams) => {
  const { variant, symbol, startDate, endDate, interval } = params;

  let queryKey = `${symbol}-${interval}min`;

  if (startDate && endDate) {
    queryKey += `-${startDate.format()}-${endDate.format()}`;
  }

  return useQuery<IStockChart>({
    queryKey: [queryKey],
    queryFn: () => fetchStockDetails(params),
    refetchInterval: variant === "realTime" && interval * (60 * 1000),
  });
};
