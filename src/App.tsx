import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path={`/detail-stockSymbol`} element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
