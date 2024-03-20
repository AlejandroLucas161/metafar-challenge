import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableRow,
  TableBody,
  TableContainer,
  TableHead,
  Stack,
  Container,
  Autocomplete,
} from "@mui/material";
import { StyledTableCell, StyledTableRow, StyledTextField } from "./styles";

const tableHeaders: Array<{ header: string }> = [
  { header: "Símbolo" },
  { header: "Nombre" },
  { header: "Moneda" },
  { header: "Tipo" },
];

const StockTable: FunctionComponent = () => {
  // DELETE THIS
  function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("NFLX", "A", "B", "C", "D"),
    createData("NFLX", "A", "B", "C", "D"),
    createData("NFLX", "A", "B", "C", "D"),
    createData("NFLX", "A", "B", "C", "D"),
    createData("NFLX", "A", "B", "C", "D"),
  ];

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ];
  // DELETE THIS

  return (
    <Container maxWidth="lg" sx={{ marginTop: "18px" }}>
      {/* INPUT */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Autocomplete
          freeSolo
          options={top100Films.map((option) => option.title)}
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
          marginTop: "16px",
          border: "2px solid #969696",
          borderRadius: "8px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map(({ header }) => (
                <StyledTableCell
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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">
                  <Link to={`/detail/${0}`}>{row.name}</Link>
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StockTable;
