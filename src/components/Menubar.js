import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  height: 60px;
  background-color: lightgreen;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  margin-right: 5vw;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
  background-color: darkcyan;
`;

const Submenu = styled.div`
  background-color: lightgreen;
  position: absolute;
  top: ${({ submenu }) => (submenu ? "40px" : "-20vh")};
  width: 100px;
  transition: 550ms;
  z-index: -1;
`;

const Menubar = () => {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => {
    setSubmenu(!submenu);
  };
  return (
    <>
      <Nav>
        <LinkWrapper>
          <NavLink to="/">Home</NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="#" onClick={showSubmenu}>
            Reports
          </NavLink>
          <Submenu submenu={submenu}>
            <NavLink to="/overview">Overview</NavLink>
            <p>Item1</p>
            <p>Item2</p>
            <p>Item3</p>
            <p>Item3</p>
            <p>Item3</p>
            <NavLink to="/overview">Overview</NavLink>
          </Submenu>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="/original">Original</NavLink>
        </LinkWrapper>
      </Nav>
    </>
  );
};

export default Menubar;
