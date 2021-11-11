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

const ReportsWrap = styled.div`
  height: 200px;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: yellow;
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
        <ReportsWrap>
          <NavLink to="#" onClick={showSubmenu}>
            Reports
          </NavLink>
        </ReportsWrap>
        <NavLink to="/overview">Overview</NavLink>
      </Nav>
    </>
  );
};

export default Menubar;
