import { FunctionComponent } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Historical: FunctionComponent = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Desde" format="DD/MM/YYYY" />

        <DatePicker label="Hasta" format="DD/MM/YYYY" />
      </LocalizationProvider>
    </>
  );
};

export default Historical;
