import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { ReportOne, ReportTwo, ReportThree } from "./pages/Reports";
import Teams from "./pages/Teams";
import Menubar from "./components/Menubar";

const App = () => {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/reports/reportone" element={<ReportOne />} />
          <Route path="/reports/reporttwo" element={<ReportTwo />} />
          <Route path="/reports/reportthree" element={<ReportThree />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
      <p
        style={{
          zIndex: "-2",
          position: "relative",
          backgroundColor: "lightblue"
        }}
      >
        Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem
        impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem
        impsum{" "}
      </p>
    </>
  );
};

export default App;
