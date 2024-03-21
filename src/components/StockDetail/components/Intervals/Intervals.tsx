import { Grid, Tooltip, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { StyledButton } from "../../styles";

const intervalsTimes: Array<{ interval: number; tooltip: string }> = [
  { interval: 5, tooltip: "5 minutos" },
  { interval: 10, tooltip: "10 minutos" },
  { interval: 15, tooltip: "15 minutos" },
];

const Intervals: FunctionComponent = () => {
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
          >
            {interval}
          </StyledButton>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default Intervals;
