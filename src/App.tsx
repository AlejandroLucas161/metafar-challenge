import { AppBar, Container, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StockDetail, StockTable } from "./components";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AppBar
        position="static"
        variant="outlined"
        sx={{
          borderBottom: "2px solid #7a7a7a",
          background: "none",
          padding: "16px 0",
        }}
      >
        <Typography variant="h5" sx={{ margin: "0 auto" }}>
          LiveStockCheck
        </Typography>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: "24px" }}>
        <Routes>
          <Route path="/" element={<StockTable />} />
          <Route path={"/detail/:id"} element={<StockDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
