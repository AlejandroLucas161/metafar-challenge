import { FunctionComponent, useState } from "react";
import { Grid, Tooltip, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledButton } from "./styles";

const intervals: Array<{ interval: number; tooltip: string }> = [
  { interval: 5, tooltip: "5 minutos" },
  { interval: 10, tooltip: "10 minutos" },
  { interval: 15, tooltip: "15 minutos" },
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
          {intervals.map(({ interval, tooltip }) => (
            <Tooltip
              title={
                <Typography variant="caption" sx={{ color: "#f2f2f2" }}>
                  {tooltip}
                </Typography>
              }
              arrow
            >
              <StyledButton
                key={interval}
                variant="contained"
                onClick={() => handleVariant("realTime")}
                sx={{
                  minWidth: "56px",
                  minHeight: "fit-content",
                  padding: "0",
                  fontSize: "16px",
                }}
              >
                {interval}
              </StyledButton>
            </Tooltip>
          ))}
        </Grid>

        <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Desde" format="DD/MM/YYYY" />

            <DatePicker label="Hasta" format="DD/MM/YYYY" />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StockDetail;
