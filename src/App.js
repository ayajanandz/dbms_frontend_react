import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact/>
      </Routes>
    </>
  );
};

export default App;
