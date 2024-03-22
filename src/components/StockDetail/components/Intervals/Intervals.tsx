import { FunctionComponent } from "react";
import { Grid, Tooltip, Typography } from "@mui/material";
import { StyledButton } from "../../styles";
import { IntervalsType } from "../../../../types";

const intervalsTimes: Array<{ interval: IntervalsType; tooltip: string }> = [
  { interval: 1, tooltip: "1 minutos" },
  { interval: 5, tooltip: "5 minutos" },
  { interval: 15, tooltip: "15 minutos" },
];

const Intervals: FunctionComponent<{
  intervalValue: IntervalsType;
  onIntervalChange: (interval: IntervalsType) => void;
}> = ({ intervalValue, onIntervalChange }) => {
  return (
    <Grid display="flex" gap={1}>
      {intervalsTimes.map(({ interval, tooltip }) => (
        <Tooltip
          key={interval}
          title={
            <Typography variant="caption" sx={{ color: "#f2f2f2" }}>
              {tooltip}
            </Typography>
          }
          arrow
        >
          <StyledButton
            variant="contained"
            sx={{
              minWidth: "56px",
              minHeight: "56px",
              padding: "0",
              fontSize: "18px",
            }}
            className={interval === intervalValue ? "active" : ""}
            onClick={() => onIntervalChange(interval)}
          >
            {interval}
          </StyledButton>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default Intervals;
