import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position:sticky;
  gap: 30px;
  color: ${(props) => props.theme.color.on.background};
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: ${(props) => props.theme.color.on.hover};
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <footer className="mastfoot text-center">
      <NavContainer>
        <p><NavLink className="link" href="/">&copy; 2025 Twelve.Community</NavLink></p>
        <p>
          <NavLink href="#demo" alt="Voice Over">
            Demo
          </NavLink>
        </p>
        <p>
          <NavLink href="#recovery" alt="recovery">
            About
          </NavLink>
        </p>
        <p>
          <NavLink href="#donate" alt="donate">
            Donate
          </NavLink>
        </p>
      </NavContainer>
    </footer>
  );
};

export default Footer;
