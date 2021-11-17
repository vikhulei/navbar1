import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: lightgreen;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  margin-right: 5vw;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
`;

const Submenu = styled.div`
  /* display: flex; */
  flex-direction: column;
  background-color: lightgreen;
  position: absolute;
  transition: 1550ms;
  top: ${({ showSubMenu }) => (showSubMenu ? "" : "60px")};
  display: ${({ showSubMenu }) => (showSubMenu ? "none" : "flex")};
  width: 100px;
`;

const Menubar = () => {
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [subMenu, setSubMenu] = useState("");
  const showSubmenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <>
      <Nav>
        <LinkWrapper>
          <NavLink to="/">Home</NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            to="#"
            onClick={() => {
              setSubMenu("reports");
              showSubmenu();
            }}
          >
            Reports
          </NavLink>
          <Submenu showSubMenu={showSubMenu} subMenu={subMenu}>
            <NavLink to="/reports/reportone">Report1</NavLink>
            <NavLink to="/reports/reporttwo">Report2</NavLink>
            <NavLink to="/reports/reportthree">Report3</NavLink>
          </Submenu>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="#" onClick={showSubmenu}>
            Overview
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="/teams">Teams</NavLink>
        </LinkWrapper>
      </Nav>
    </>
  );
};

export default Menubar;
