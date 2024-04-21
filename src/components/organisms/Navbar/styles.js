// styles.js (Navbar)

import styled from "styled-components";
import {
  Navbar as BootstrapNavbar,
  Nav as BootstrapNav,
} from "react-bootstrap";
import Logo from "../../../assets/logoApp.png";

export const NavbarContainer = styled(BootstrapNavbar)`
  background-color: #ffffff;
  width: 100%;
`;

export const CustomBrand = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  margin-left: 20px;
`;

export const CustomNav = styled(BootstrapNav)`
  margin-left: auto;
`;

export const CustomNavLink = styled(BootstrapNav.Link)`
  color: #676767;
  text-decoration: none;
  font-weight: 500;
  margin-right: 20px;
  transition: color 0.3s ease;
  margin-right: 40px;
  margin-left: 0;

  &:hover {
    color: #ff5f6d;
  }
`;

export const CustomIcon = styled.i`
  margin-right: 5px;
`;
