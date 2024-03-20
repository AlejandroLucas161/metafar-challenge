import {
  TableCell,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";

const BORDER = "2px solid #969696";

export const StyledTableCell = styled(TableCell)(() => ({
  border: BORDER,
  borderTop: 0,

  "&:first-child": {
    borderLeft: 0,
  },

  "&:last-child": {
    borderRight: 0,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  "& fieldset": {
    border: BORDER,
    marginBottom: "6px",
  },
}));
