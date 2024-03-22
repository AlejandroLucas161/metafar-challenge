import { FunctionComponent } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTypes } from "../../StockDetail";
import dayjs from "dayjs";

type HistoricalProps = {
  startDateValue: DateTypes;
  onStartDateChange: (date: DateTypes) => void;
  endDateValue: DateTypes;
  onEndDateChange: (date: DateTypes) => void;
  disableHistorical?: boolean;
};

const Historical: FunctionComponent<HistoricalProps> = ({
  startDateValue,
  onStartDateChange,
  endDateValue,
  onEndDateChange,
  disableHistorical,
}) => {
  const today = dayjs();
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Desde"
          value={startDateValue}
          maxDateTime={today}
          format="DD/MM/YYYY hh:mm A"
          onChange={(date) => onStartDateChange(date)}
          disabled={disableHistorical}
        />

        <DateTimePicker
          label="Hasta"
          value={endDateValue}
          minDateTime={startDateValue}
          maxDateTime={today}
          format="DD/MM/YYYY hh:mm A"
          onChange={(date) => onEndDateChange(date)}
          disabled={disableHistorical}
        />
      </LocalizationProvider>
    </>
  );
};

export default Historical;
