import { FunctionComponent, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { StyledButton } from "./styles";
import { Chart, Intervals, Historical } from "./components";
import { useStockDetails } from "../../hooks/useStockDetails";
import { useStock } from "../../hooks/useStock";
import { IntervalsType } from "../../types";

export type StockVariant = "realTime" | "historical";

const StockDetail: FunctionComponent = () => {
  const [interval, setInterval] = useState<IntervalsType>(1);
  const [variant, setVariant] = useState<StockVariant>("realTime");
  const { data: stockDetail } = useStock();
  const { data: stockChartDetails } = useStockDetails(interval);

  const stockHeader = `${stockDetail?.name} / ${stockDetail?.symbol} / ${stockDetail?.currency}`;

  const handleStockVariant = (variant: StockVariant) => {
    setVariant(variant);
  };

  const handleIntervalChange = (interval: IntervalsType) => {
    setInterval(interval);
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
        <Grid display="flex" gap={1}></Grid>

        <Grid>
          {variant === "realTime" && (
            <Intervals
              intervalValue={interval}
              onIntervalChange={handleIntervalChange}
            />
          )}

          {variant === "historical" && <Historical />}
        </Grid>
      </Grid>

      <Grid width="100%">
        <Chart values={stockChartDetails?.values || []} />
      </Grid>
    </Grid>
  );
};

export default StockDetail;
