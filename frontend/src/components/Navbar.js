import React, { useEffect } from "react";
import styled from "styled-components";
import Theme from "../contexts/theme";
import { useAuthStore } from "../contexts/auth";

const StyledHeader = styled.header`
  padding: 10px;
  min-height: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Navbar = () => {
  const [{ isAuthenticated }, actions] = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) actions.loadUser();
  }, [isAuthenticated, actions]);

  return (
    <Theme>
      <StyledHeader>
        <div className="inner text-center">
          <h4 className="masthead-brand">
            <a className="nav-link" href="/"> Twelve.Community </a>
          </h4>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="/voiceover"> Voice Over </a>
            <a className="nav-link" href="/recovery"> Recovery </a>
            <a className="nav-link" href="/donate"> Donate </a>
            <a className="nav-link" href="/socials"> Socials </a>
          </nav>
        </div>
      </StyledHeader>
    </Theme>
  );
};

export default Navbar;
