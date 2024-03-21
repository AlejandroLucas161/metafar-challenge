import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableRow,
  TableBody,
  TableContainer,
  TableHead,
  Stack,
  Autocomplete,
  Skeleton,
  Pagination,
} from "@mui/material";
import { StyledTableCell, StyledTableRow, StyledTextField } from "./styles";
import { useStocksList } from "../../hooks/useStocksList";

const tableHeaders: Array<{ header: string }> = [
  { header: "Símbolo" },
  { header: "Nombre" },
  { header: "Moneda" },
  { header: "Tipo" },
];

const StockTable: FunctionComponent = () => {
  const { data, isLoading } = useStocksList();

  // DELETE THIS
  const mockData = data?.slice(0, 12);
  // DELETE THIS

  return (
    <>
      {/* INPUT */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Autocomplete
          freeSolo
          options={mockData?.map(({ name }) => name) || []}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              placeholder="Busca la acción por nombre o símbolo..."
            />
          )}
        />
      </Stack>

      {/* TABLE */}
      <TableContainer
        sx={{
          marginTop: "8px",
          marginBottom: "12px",
          border: "2px solid #969696",
          borderRadius: "8px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map(({ header }) => (
                <StyledTableCell
                  key={header}
                  align="left"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    minWidth: "150px",
                  }}
                >
                  {header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading
              ? Array(12)
                  .fill({})
                  .map((_, idx) => (
                    <StyledTableRow key={idx * 2}>
                      <StyledTableCell align="left">
                        <Skeleton variant="rounded" width={50} height={16} />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Skeleton variant="rounded" width={410} height={16} />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Skeleton variant="rounded" width={50} height={16} />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Skeleton variant="rounded" width={50} height={16} />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
              : mockData?.map(({ symbol, name, currency, type, mic_code }) => (
                  <StyledTableRow key={mic_code + symbol}>
                    <StyledTableCell align="left">
                      <Link to={`/detail/${symbol}`}>{symbol}</Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">{name}</StyledTableCell>
                    <StyledTableCell align="left">{currency}</StyledTableCell>
                    <StyledTableCell align="left">{type}</StyledTableCell>
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination count={20} sx={{ width: "fit-content", margin: "0 auto" }} />
    </>
  );
};

export default StockTable;
