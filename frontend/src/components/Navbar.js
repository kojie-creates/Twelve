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
  background : linear-gradient(to right, #805ad5, #be5ad5);;
`;

const StyledNav = styled.nav`
  padding: 5px;
  margin-right: 10px;
  .nav-link {
    color: ${(props) => props.theme.color.on.surface};
    &:hover {
      color: ${(props) => props.theme.color.primary_variant};
    }
  }
`;

export const Navbar = () => {
  const [{ isAuthenticated }, actions] = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) actions.loadUser();
  }, [isAuthenticated, actions]);

  return (
      <StyledHeader >
        <div className="inner text-center">
          <h4 className="masthead-brand">
            <a className="nav-link" href="/"> Twelve.Community </a>
          </h4>
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
