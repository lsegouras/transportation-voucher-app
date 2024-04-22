// Navbar.jsx

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as C from "./styles";
import useAuth from "../../../hooks/useAuth";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";

const Navigation = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <C.NavbarContainer bg="light" expand="lg" className="fixed-left">
          <C.CustomBrand />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <C.CustomNav className="ml-auto">
              <C.CustomNavLink as={Link} to="/">
                <C.CustomIcon>
                  <FaHome />
                </C.CustomIcon>{" "}
                Home
              </C.CustomNavLink>
              <C.CustomNavLink as={Link} to="/employee">
                <C.CustomIcon>
                  <FaPerson />
                </C.CustomIcon>{" "}
                Employee
              </C.CustomNavLink>
              <C.CustomNavLink as={Link} to="/dashboard">
                <C.CustomIcon>
                  <BiSolidDashboard />
                </C.CustomIcon>{" "}
                Dashboard
              </C.CustomNavLink>
            </C.CustomNav>
            <Nav>
              <C.CustomNavLink as={Link} to="/signout">
                <C.CustomIcon>
                  <FaSignOutAlt />
                </C.CustomIcon>{" "}
                Signout
              </C.CustomNavLink>
            </Nav>
          </Navbar.Collapse>
        </C.NavbarContainer>
      )}
    </>
  );
};

export default Navigation;
