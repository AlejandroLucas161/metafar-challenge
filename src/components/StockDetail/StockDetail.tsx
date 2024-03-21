import { FunctionComponent, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Icon, StyledButton } from "./styles";
import { Chart, Intervals, Historical } from "./components";
import candleChartIcon from "../../assets/candle-chart-icon.svg";
import timeChartIcon from "../../assets/time-chart-icon.svg";

const charts: Array<{ icon: string }> = [
  { icon: candleChartIcon },
  { icon: timeChartIcon },
];

const StockDetail: FunctionComponent = () => {
  const [variant, setVariant] = useState<"realTime" | "historical">("realTime");

  const handleVariant = (variant: "realTime" | "historical") => {
    setVariant(variant);
  };

  return (
    <Grid container gap={5}>
      <Grid width="100%" display="flex" justifyContent="space-between">
        <Typography variant="h5">Netfilx / NFLX / EUR</Typography>

        <Grid>
          <StyledButton
            variant="contained"
            disabled={variant === "realTime"}
            onClick={() => handleVariant("realTime")}
          >
            Tiempo Real
          </StyledButton>
          <StyledButton
            variant="contained"
            disabled={variant === "historical"}
            onClick={() => handleVariant("historical")}
          >
            Histórico
          </StyledButton>
        </Grid>
      </Grid>

      <Grid width="100%" display="flex" justifyContent="space-between">
        <Grid display="flex" gap={1}>
          {charts.map(({ icon }, idx) => (
            <StyledButton
              key={idx}
              variant="contained"
              sx={{
                minWidth: "56px",
                minHeight: "56px",
                padding: "0",
                fontSize: "18px",
              }}
            >
              <Icon icon={icon} />
            </StyledButton>
          ))}
        </Grid>

        <Grid>
          {variant === "realTime" && <Intervals />}

          {variant === "historical" && <Historical />}
        </Grid>
      </Grid>

      <Grid width="100%">
        <Chart />
      </Grid>
    </Grid>
  );
};

export default StockDetail;
