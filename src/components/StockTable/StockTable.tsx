import { ChangeEvent, FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableRow,
  TableBody,
  TableContainer,
  TableHead,
  Skeleton,
  Pagination,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useStocksList } from "../../hooks/useStocksList";
import StockAutocomplete from "./StockAutocomplete/StockAutocomplete";

const tableHeaders: Array<{ header: string }> = [
  { header: "Símbolo" },
  { header: "Nombre" },
  { header: "Moneda" },
  { header: "Tipo" },
];

const StockTable: FunctionComponent = () => {
  const { data, isLoading } = useStocksList();
  const [page, setPage] = useState<number>(1);

  const limit = 12;
  const count = !!data?.length && Math.ceil(data?.length / 12);

  const autocompleteList = data?.map((stock) => ({
    label: stock.name,
    id: stock.symbol,
  }));

  const tableEnds = page * limit;
  const tableStarts = tableEnds - limit;
  const stocks = data?.slice(tableStarts, tableEnds);

  const handlePage = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <>
      {/* INPUT */}
      <StockAutocomplete options={autocompleteList} />

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
              : stocks?.map(({ symbol, name, currency, type, mic_code }) => (
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

      {count && (
        <Pagination
          count={count}
          onChange={handlePage}
          sx={{ width: "fit-content", margin: "0 auto" }}
        />
      )}
    </>
  );
};

export default StockTable;
