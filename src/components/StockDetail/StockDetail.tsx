import { FunctionComponent, useState } from "react";
import { Grid, Skeleton, Typography } from "@mui/material";
import { StyledButton } from "./styles";
import { Chart, Intervals, Historical } from "./components";
import { useStockDetails } from "../../hooks/useStockDetails";
import { useStock } from "../../hooks/useStock";
import { IntervalsType } from "../../types";
import { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export type StockVariant = "realTime" | "historical";
export type DateTypes = Dayjs | null;
interface IHistorical {
  startDate: DateTypes;
  endDate: DateTypes;
}

const StockDetail: FunctionComponent = () => {
  const { id: stockSymbol } = useParams();
  const [startDate, setStartDate] = useState<DateTypes>(null);
  const [endDate, setEndDate] = useState<DateTypes>(null);
  const [historical, setHistorical] = useState<IHistorical>({
    startDate: null,
    endDate: null,
  });
  const [interval, setInterval] = useState<IntervalsType>(1);
  const [variant, setVariant] = useState<StockVariant>("realTime");
  const {
    data: stockDetail,
    isFetching: isStockDetailFetching,
    isError: isStockError,
    error: stockError,
  } = useStock(stockSymbol);
  const {
    data: stockChartDetails,
    isError: isStockChartDetailsError,
    error: stockChartDetailsError,
  } = useStockDetails({
    variant: variant,
    symbol: stockSymbol || "",
    interval: interval,
    startDate: historical?.startDate || null,
    endDate: historical?.endDate || null,
  });

  const stockHeader = isStockError
    ? stockError.message || "Error desconocido"
    : `${stockDetail?.name} / ${stockDetail?.symbol} / ${stockDetail?.currency}`;

  const showChart =
    variant === "realTime" ||
    (variant === "historical" && historical?.startDate && historical?.endDate);

  const handleStockVariant = (variant: StockVariant) => {
    setVariant(variant);
  };

  const handleRealtime = () => {
    if (variant === "realTime") return;

    setEndDate(null);
    setStartDate(null);
    setHistorical({
      startDate: null,
      endDate: null,
    });
    handleStockVariant("realTime");
  };

  const handleIntervalChange = (interval: IntervalsType) => {
    setInterval(interval);
  };

  const handleStartDateChange = (date: DateTypes) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: DateTypes) => {
    setEndDate(date);
  };

  const handleSearchHistorical = () => {
    setHistorical({ startDate, endDate });
  };

  const handleHistorical = () => {
    if (variant === "historical") return;

    handleStockVariant("historical");
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
            className={variant === "realTime" ? "active" : ""}
            onClick={handleRealtime}
          >
            Tiempo Real
          </StyledButton>
          <StyledButton
            variant="contained"
            className={variant === "historical" ? "active" : ""}
            onClick={handleHistorical}
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
          <IconButton
            size="large"
            disabled={variant === "realTime"}
            onClick={() => handleSearchHistorical()}
          >
            <SearchIcon />
          </IconButton>

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
        {showChart && (
          <Chart
            interval={interval}
            symbol={stockSymbol || ""}
            currency={stockDetail?.currency || ""}
            values={stockChartDetails?.values || []}
          />
        )}

        {isStockChartDetailsError && (
          <div>{stockChartDetailsError.message || "Error desconocido"}</div>
        )}
      </Grid>
    </Grid>
  );
};

export default StockDetail;
