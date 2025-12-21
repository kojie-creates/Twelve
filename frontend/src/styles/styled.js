import React from "react";
import styled from "styled-components";
import Avatar from "../components/Avatar";

export const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;
  background : ${(props) => props.theme.color.background};
`;

export const Container = styled.div`
   
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px 10px;
  text-align: left;
  background : ${(props) => props.theme.color.surface};
  color: ${(props) => props.theme.color.on.surface};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledDiv = styled.div`
  max-width: fit-content;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.secondary}; 
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } 
`;

export const RoundedImageContainer = styled.div`
  align-items: center;
  img {
    margin: auto 10px;
    border-radius: 50%; 
    border: 10px solid ${(props) => props.theme.color.primary}; 
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  img {
    margin: auto 10px;
    border-radius: 15px;
    border: 10px solid ${(props) => props.theme.color.primary}; 
  }
`;

export const ImageIcons = styled(Avatar)`
  margin-left: 5px;
  margin-right: 5px;
`;

export const StyledHeading = styled.h3`
  color: ${(props) => props.theme.color.header};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  padding-top: 10px;
`;

export const StyledParagraph = styled.p`
padding: 20px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 18px;
  line-height: 1.6;
   background : ${(props) => props.theme.color.header};
   border-radius: 16px;
`;

export const IconLinks = (props) => {
  const { href, className, alt } = props;
  return (<a href={href} target="_blank" rel="noopener noreferrer" alt={alt}><i className={className}></i></a>);
};

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px; 
  li { 
    padding: 5px; 
    display: inline-block; 
    vertical-align: top;
    a {
      color: ${(props) => props.theme.color.link};
    }
  }
   
`;

export const StyledHeader = styled.header`
  padding: 0px;
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 40px;
  background :  ${(props) => props.theme.color.nav};
  color: ${(props) => props.theme.color.on.nav};
`;

export const StyledNav = styled.nav`
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

export const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.color.surface};
  &:hover {
    color: ${(props) => props.theme.color.on.hover};
  }
`;

export const BrandTitle = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.color.on.header};
  margin-left: 10px;
`;

export default styled;