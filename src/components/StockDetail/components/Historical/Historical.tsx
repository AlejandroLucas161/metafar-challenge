import { FunctionComponent } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

type HistoricalProps = {
  startDateValue: Dayjs | null;
  onStartDateChange: (date: Dayjs | null) => void;
  endDateValue: Dayjs | null;
  onEndDateChange: (date: Dayjs | null) => void;
};

const Historical: FunctionComponent<HistoricalProps> = ({
  startDateValue,
  onStartDateChange,
  endDateValue,
  onEndDateChange,
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
        />

        <DateTimePicker
          label="Hasta"
          value={endDateValue}
          minDate={startDateValue}
          format="DD/MM/YYYY hh:mm A"
          onChange={(date) => onEndDateChange(date)}
        />
      </LocalizationProvider>
    </>
  );
};

export default Historical;
