import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  background-color: yellow;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MenuWrap = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  height: 100%;
`;

const Submenu = styled.div`
  background-color: lightblue;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 5vw;
`;

const Menubar = () => {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => {
    setSubmenu(!submenu);
    alert();
  };
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <MenuWrap>
          <NavLink to="#" onClick={showSubmenu}>
            Reports
          </NavLink>
          <Submenu>
            <p>Item1</p>
            <p>Item2</p>
            <p>Item3</p>
          </Submenu>
        </MenuWrap>
        <NavLink to="/overview">Overview</NavLink>
        <NavLink to="/original">Original</NavLink>
      </Nav>
    </>
  );
};

export default Menubar;
