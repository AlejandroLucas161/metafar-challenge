import { Button, ButtonProps, styled } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(() => ({
  color: "#f2f2f2",
  backgroundColor: "#bababa",
  textTransform: "none",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "#7a7a7a",
    boxShadow: "none",
  },

  "&.active": {
    backgroundColor: "#7a7a7a",
    color: "#f2f2f2",
  },
}));

export const Icon = styled("img")`
  width: 32px;
  height: 32px;
`;
