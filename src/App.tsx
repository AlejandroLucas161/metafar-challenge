import { AppBar, Container, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { StockDetail, StockTable } from "./components";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const App: FunctionComponent = () => {
  const location = useLocation();
  const arrowBackCondition = location.pathname.includes("detail");

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          borderBottom: "2px solid #7a7a7a",
          background: "none",
          padding: "16px 0",
          justifyContent: "center",
        }}
      >
        {arrowBackCondition && (
          <IconButton
            sx={{
              position: "absolute",
              left: "30px",
              padding: 0,
              margin: "auto 0",
            }}
          >
            <Link to={"/"} style={{ lineHeight: "0" }}>
              <ArrowBackIcon />
            </Link>
          </IconButton>
        )}

        <Typography variant="h5" sx={{ margin: "0 auto" }}>
          LiveStockCheck
        </Typography>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<StockTable />} />
          <Route path={"/detail/:id"} element={<StockDetail />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
