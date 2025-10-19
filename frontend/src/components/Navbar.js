import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthStore } from "../contexts/auth";
import kojie from "../assets/me/Kojie.jpg";
import Avatar from "../components/Avatar";

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
  background :  ${(props) => props.theme.color.header};
  color: ${(props) => props.theme.color.on.header};
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
  color: ${(props) => props.theme.color.on.nav};
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
    <Wrapper>
      <Container>
        <StyledHeader >
          <div className="inner text-center">
            <StyledHeading className="masthead-brand align-items-inline">
              <RoundedImageContainer>
                <NavLink className="brand" href="/">
                  <ImageIcons image={kojie} height="50px" />
                </NavLink>
                 <BrandTitle>Kojie : Welcome</BrandTitle>
              </RoundedImageContainer>
             
            </StyledHeading>
            <StyledNav className="nav nav-masthead justify-content-center">
              <IconLinks href="tel:+13104226416" className="fa-solid fa-phone fa-2xl" alt="mobile" />
              <IconLinks href="mailto:felix.montanez@gmail.com?subject=Voice%20Over%20Inquiry" className="fa-solid fa-envelope fa-2xl" alt="email" />
              <NavLink className="nav-link" href="#demo">Demos</NavLink>
              <NavLink className="nav-link" href="#recovery">Service</NavLink>
              <NavLink className="nav-link" href="#donate">Donate</NavLink>
            </StyledNav>
          </div>
        </StyledHeader>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
