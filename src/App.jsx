import { useState } from "react";
import AppList from "./pages/AppList";
import AppNavbar from "./components/AppNavbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<AppList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
