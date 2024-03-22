import { FunctionComponent, useState } from "react";
import { Grid, Skeleton, Typography } from "@mui/material";
import { StyledButton } from "./styles";
import { Chart, Intervals, Historical } from "./components";
import { useStockDetails } from "../../hooks/useStockDetails";
import { useStock } from "../../hooks/useStock";
import { IntervalsType } from "../../types";
import { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";

export type StockVariant = "realTime" | "historical";

const StockDetail: FunctionComponent = () => {
  const { id: stockSymbol } = useParams();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [interval, setInterval] = useState<IntervalsType>(1);
  const [variant, setVariant] = useState<StockVariant>("realTime");
  const { data: stockDetail, isFetching: isStockDetailFetching } =
    useStock(stockSymbol);
  const { data: stockChartDetails } = useStockDetails({
    symbol: stockSymbol || "",
    interval: interval,
    startDate: startDate || null,
    endDate: endDate || null,
  });

  const stockHeader = `${stockDetail?.name} / ${stockDetail?.symbol} / ${stockDetail?.currency}`;

  const handleStockVariant = (variant: StockVariant) => {
    setVariant(variant);
  };

  const handleRealtime = () => {
    setEndDate(null);
    setStartDate(null);
    handleStockVariant("realTime");
  };

  const handleIntervalChange = (interval: IntervalsType) => {
    setInterval(interval);
  };

  const handleStartDateChange = (date: Dayjs | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    setEndDate(date);
  };

  return (
    <Grid container gap={5}>
      <Grid width="100%" display="flex" justifyContent="space-between">
        {isStockDetailFetching ? (
          <Skeleton variant="rounded" width={410} height={30} />
        ) : (
          <Typography variant="h5">{stockHeader}</Typography>
        )}

        <Grid>
          <StyledButton
            variant="contained"
            disabled={variant === "realTime"}
            onClick={handleRealtime}
          >
            Tiempo Real
          </StyledButton>
          <StyledButton
            variant="contained"
            disabled={variant === "historical"}
            onClick={() => handleStockVariant("historical")}
          >
            Histórico
          </StyledButton>
        </Grid>
      </Grid>

      <Grid width="100%" display="flex" justifyContent="space-between">
        <Grid display="flex" gap={1}>
          <Intervals
            intervalValue={interval}
            onIntervalChange={handleIntervalChange}
          />
        </Grid>

        <Grid gap={1}>
          <Historical
            startDateValue={startDate}
            onStartDateChange={handleStartDateChange}
            endDateValue={endDate}
            onEndDateChange={handleEndDateChange}
            disableHistorical={variant === "realTime"}
          />
        </Grid>
      </Grid>

      <Grid width="100%">
        <Chart
          interval={interval}
          symbol={stockSymbol || ""}
          currency={stockDetail?.currency || ""}
          values={stockChartDetails?.values || []}
        />
      </Grid>
    </Grid>
  );
};

export default StockDetail;
