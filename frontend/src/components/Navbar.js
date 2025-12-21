import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthStore } from "../contexts/auth";
import Avatar from "../components/Avatar";
import animeMe from "../assets/me/animeMe.jpg";

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;  
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: left;
  position: sticky;
  top: 0;
  padding: 10px auto;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.header`
  padding: 0px;
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 40px;
  background :  ${(props) => props.theme.color.nav};
  color: ${(props) => props.theme.color.on.nav};
`;

const StyledNav = styled.nav`
  padding: 10px;
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.secondary};
  .nav-link {
    color: ${(props) => props.theme.color.on.nav};
    &:hover {
      color: ${(props) => props.theme.color.on.navHover};
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

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.color.surface};
  &:hover {
    color: ${(props) => props.theme.color.on.hover};
  }
`;

const RoundedImageContainer = styled.div`
  display: flex;
  flex-direction: start;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
  img {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 50%;
  }
`;

const ImageIcons = styled(Avatar)`
  margin-left: 10px;
  margin-right: 10px;
`;

const BrandTitle = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.color.on.header};
  margin-left: 10px;
`;

const IconLinks = (props) => {
  const { href, className, alt } = props;
  return (<a href={href} className="nav-link" target="_blank" rel="noopener noreferrer" alt={alt}><i className={className}></i></a>);
};

export const Navbar = () => {
  const [{ isAuthenticated }, actions] = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) actions.loadUser();
  }, [isAuthenticated, actions]);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-brand">
      <a class="navbar-brand ml-20" href="#">Kojie : Voice Over</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#demo">Demos</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Socials</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
