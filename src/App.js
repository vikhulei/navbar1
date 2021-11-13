import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";
import Original from "./pages/Original";
import Menubar from "./components/Menubar";

const App = () => {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
      <p
        style={{
          zIndex: "-2",
          position: "relative"
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
