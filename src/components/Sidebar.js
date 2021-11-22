import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons";

const Nav = styled.div`
  background: #15171c;
  background-color: darkgreen;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  background-color: darkred;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: ${({ sdbr }) => (sdbr ? "0" : "-100%")};
  transition: 350ms;
  /* z-index: 0; */
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "green" }}> */}
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>

      <SidebarNav sdbr={sidebar}>
        <NavIcon to="#">
          <AiIcons.AiOutlineClose onClick={showSidebar} />
        </NavIcon>

        {SidebarData.map((item, index) => {
          return <SubMenu key={index} itm={item} />;
        })}
      </SidebarNav>

      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;

// {SidebarData.map((item, index) => {
//   return <SubMenu item={item} key={index} />;
// })}
