import { FunctionComponent, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Icon, StyledButton } from "./styles";
import { Chart, Intervals, Historical } from "./components";
import candleChartIcon from "../../assets/candle-chart-icon.svg";
import timeChartIcon from "../../assets/time-chart-icon.svg";
import { useStockDetails } from "../../hooks/useStockDetails";
import { useStock } from "../../hooks/useStock";

export type StockVariant = "realTime" | "historical";
export type ChartType = "candlestick" | "area";

const charts: Array<{ icon: string; chart: ChartType }> = [
  { icon: candleChartIcon, chart: "candlestick" },
  { icon: timeChartIcon, chart: "area" },
];

const StockDetail: FunctionComponent = () => {
  const { data: stockDetail } = useStock();
  const { data: stockChartDetails } = useStockDetails();
  const [variant, setVariant] = useState<StockVariant>("realTime");
  const [chartType, setChartType] = useState<ChartType>("candlestick");

  const stockHeader = `${stockDetail?.name} / ${stockDetail?.symbol} / ${stockDetail?.currency}`;

  const handleStockVariant = (variant: StockVariant) => {
    setVariant(variant);
  };

  const handleChart = (chart: ChartType) => {
    setChartType(chart);
  };

  return (
    <Grid container gap={5}>
      <Grid width="100%" display="flex" justifyContent="space-between">
        <Typography variant="h5">{stockHeader}</Typography>

        <Grid>
          <StyledButton
            variant="contained"
            disabled={variant === "realTime"}
            onClick={() => handleStockVariant("realTime")}
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
          {charts.map(({ icon, chart }, idx) => (
            <StyledButton
              key={idx}
              variant="contained"
              disabled={chart === chartType}
              sx={{
                minWidth: "56px",
                minHeight: "56px",
                padding: "0",
                fontSize: "18px",
              }}
              onClick={() => handleChart(chart)}
            >
              <Icon src={icon} />
            </StyledButton>
          ))}
        </Grid>

        <Grid>
          {variant === "realTime" && <Intervals />}

          {variant === "historical" && <Historical />}
        </Grid>
      </Grid>

      <Grid width="100%">
        <Chart chart={chartType} values={stockChartDetails?.values || []} />
      </Grid>
    </Grid>
  );
};

export default StockDetail;
