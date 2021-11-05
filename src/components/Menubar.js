import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  background-color: yellow;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 5vw;
`;

const Menubar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/overview">Overview</NavLink>
      </Nav>
    </>
  );
};

export default Menubar;
