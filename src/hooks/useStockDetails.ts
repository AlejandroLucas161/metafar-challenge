import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IStockChart, IntervalsType } from "../types";
import { Dayjs } from "dayjs";

const API_KEY = import.meta.env.VITE_TWELVEDATA_API_KEY;

type fetchStockDetailsParams = {
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
    `https://api.twelvedata.com/time_series?${urlParams.toString()}`
  );
  return response.data;
};

export const useStockDetails = (params: fetchStockDetailsParams) => {
  const { startDate, endDate, interval } = params;

  return useQuery<IStockChart>({
    queryKey: ["stock_details"],
    queryFn: () => fetchStockDetails(params),
    refetchInterval: !startDate && !endDate && interval * (60 * 1000),
  });
};
