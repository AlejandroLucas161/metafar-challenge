import { AppBar, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StockTable } from "./components";

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

      <Routes>
        <Route path="/" element={<StockTable />} />
        <Route path={"/detail/:id"} element={<>DETAIL</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
