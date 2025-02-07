import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Result from "./pages/Result";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="game" element={<Game />}></Route>
          <Route path="result" element={<Result />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
