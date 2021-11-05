import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/overview">Overview</Link>
      </Nav>
    </>
  );
};

export default Menubar;
