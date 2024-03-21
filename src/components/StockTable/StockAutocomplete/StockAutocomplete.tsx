import { SyntheticEvent, useState } from "react";
import { Autocomplete, Stack } from "@mui/material";
import { StyledTextField } from "../styles";

type StockAutocompleteProps = {
  options?: Array<{ label: string; id: string }>;
};

const StockAutocomplete = ({ options }: StockAutocompleteProps) => {
  const [query, setQuery] = useState<string>("");

  const handleAutocomplete = (
    _: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setQuery(value);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Autocomplete
        freeSolo
        open={!!query?.length}
        inputValue={query}
        onInputChange={handleAutocomplete}
        options={options || []}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id}>
              {option.label}
            </li>
          );
        }}
        renderInput={(params) => (
          <StyledTextField {...params} placeholder="Busca una acción..." />
        )}
      />
    </Stack>
  );
};

export default StockAutocomplete;
