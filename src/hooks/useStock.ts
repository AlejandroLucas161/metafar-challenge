import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IStock } from "../types";

const fetchStock = async (): Promise<IStock> => {
  const response = await axios.get("/stock.json");
  return response.data;
};

export const useStock = () => {
  return useQuery({ queryKey: ["stock"], queryFn: fetchStock });
};
