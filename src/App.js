import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./FrontPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
