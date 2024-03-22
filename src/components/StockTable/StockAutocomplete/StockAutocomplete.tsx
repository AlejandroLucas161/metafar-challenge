import { SyntheticEvent } from "react";
import { Autocomplete, Stack } from "@mui/material";
import { StyledTextField } from "../styles";

type StockAutocompleteProps = {
  query: string;
  onQueryChange: (newQuery: string) => void;
  options?: Array<{ label: string; id: string }>;
};

const StockAutocomplete = ({
  query,
  onQueryChange,
  options,
}: StockAutocompleteProps) => {
  const handleAutocomplete = (
    _: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    onQueryChange(value);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Autocomplete
        freeSolo
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
