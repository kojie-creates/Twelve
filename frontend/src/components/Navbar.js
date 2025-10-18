import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthStore } from "../contexts/auth";

const StyledHeader = styled.header`
  padding: 0px;
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 60px;
  padding: auto 20px;
  background : linear-gradient(to right, #805ad5, #582eb5);
`;

const StyledNav = styled.nav`
  padding: 10px;
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.secondary};
  .nav-link {
    color: ${(props) => props.theme.color.on.nav};
    &:hover {
      color: ${(props) => props.theme.color.primary_variant};
    }
  }
`;

const StyledHeading = styled.h3`
  color: ${(props) => props.theme.color.on.header};
  font-family: "Alfa Slab One", serif;
  font-weight: 400;
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 32px;
`;

export const Navbar = () => {
  const [{ isAuthenticated }, actions] = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) actions.loadUser();
  }, [isAuthenticated, actions]);

  return (
      <StyledHeader >
        <div className="inner text-center">
          <StyledHeading className="masthead-brand">
            <a className="nav-link" href="/"> Kojie Montanez </a>
          </StyledHeading>
          <StyledNav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="#demo">Demo</a>
            <a className="nav-link" href="#recovery">About</a>
            <a className="nav-link" href="#donate">Donate</a>
          </StyledNav>
        </div>
      </StyledHeader>
  
  );
};

export default Navbar;
