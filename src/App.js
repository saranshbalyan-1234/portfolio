import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
