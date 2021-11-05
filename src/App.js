import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
      <h3>Hi</h3>
    </>
  );
};

export default App;
