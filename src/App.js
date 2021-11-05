import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";
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
      <h3>Hi</h3>
    </>
  );
};

export default App;
