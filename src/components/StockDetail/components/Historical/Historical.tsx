import { FunctionComponent } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

type HistoricalProps = {
  startDateValue: Dayjs | null;
  onStartDateChange: (date: Dayjs | null) => void;
  endDateValue: Dayjs | null;
  onEndDateChange: (date: Dayjs | null) => void;
  disableHistorical?: boolean;
};

const Historical: FunctionComponent<HistoricalProps> = ({
  startDateValue,
  onStartDateChange,
  endDateValue,
  onEndDateChange,
  disableHistorical,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Desde"
          value={startDateValue}
          maxDate={endDateValue}
          format="DD/MM/YYYY hh:mm A"
          onChange={(date) => onStartDateChange(date)}
          disabled={disableHistorical}
        />

        <DateTimePicker
          label="Hasta"
          value={endDateValue}
          minDate={startDateValue}
          format="DD/MM/YYYY hh:mm A"
          onChange={(date) => onEndDateChange(date)}
          disabled={disableHistorical}
        />
      </LocalizationProvider>
    </>
  );
};

export default Historical;
