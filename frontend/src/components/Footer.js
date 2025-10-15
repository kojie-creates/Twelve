import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: #fff;
`;

const Footer = () => {
  return (
    <footer className="mastfoot text-center">
      <NavContainer>
        <p>&copy; 2025 Twelve.Community {"  "}&middot;</p>
        <p>
          <NavLink href="/voiceover" alt="Voice Over">
            Voice-Over
          </NavLink>
          &middot;
        </p>
        <p>
          <NavLink href="/recovery" alt="recovery">
            Recovery
          </NavLink>
          &middot;
        </p>
        <p>
          <NavLink href="/socials" alt="socials">
            Socials
          </NavLink>
          &middot;
        </p>
        <p>
          <NavLink href="/donate" alt="donate">
            Donate
          </NavLink>
        </p>
      </NavContainer>
    </footer>
  );
};

export default Footer;
