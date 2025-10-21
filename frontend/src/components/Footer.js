import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position:sticky;
  gap: 20px;
  padding: 20px;
  background: ${(props) => props.theme.color.nav};
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: ${(props) => props.theme.color.on.nav};
  &:hover {
   color: ${(props) => props.theme.color.on.hover};
   padding: 7px;
    text-decoration: underline;
  }
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

const IconLinks = (props) => {
  const { href, className, alt } = props;
  return (<a href={href} target="_blank" rel="noopener noreferrer" alt={alt}><i className={className}></i></a>);
};
const StyledList = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 0px;
  li {
    padding: 10px; 
    display: inline-block;
    margin-right: 10px;
    a {
      color: ${(props) => props.theme.color.on.nav};
    }
  }
    li.donation-icons {
    min-height: 300px;
    padding: 10px;
    display: inline-block;
    margin-bottom: 20px;
  }

`;

const Footer = () => {
  return (
    <footer className="mastfoot text-center">
      <NavContainer>

        <StyledList className="social-icons">
          <li><NavLink className="link" href="/">&copy; 2025 Twelve.Community</NavLink></li>
          <li><IconLinks href="tel:+13104226416" className="fa-solid fa-phone fa-lg" alt="mobile" /></li>
          <li><IconLinks href="mailto:felix.montanez@gmail.com?subject=Voice%20Over%20Inquiry" className="fa-solid fa-envelope fa-lg" alt="email" /></li>
          <li><IconLinks href="https://www.facebook.com/profile.php?id=100088510260448" className="fa-brands fa-facebook fa-lg" alt="facebook" /></li>
          <li><IconLinks href="https://www.youtube.com/@thevoiceofkojie" className="fa-brands fa-youtube fa-lg" alt="youtube" /></li>
          <li><IconLinks href="https://t.co/TK8wXby4uA" alt="instagram" className="fa-brands fa-instagram fa-lg" /></li>
          <li><IconLinks href="https://www.tiktok.com/@thevoiceofkojie?_t=ZP-90ZSOlSrCVr&_r=1" alt="tiktok" className="fa-brands fa-tiktok fa-lg" /></li>
          <li><IconLinks href="https://x.com/kojiemontanez" alt="twitter, x" className="fa-brands fa-twitter fa-lg" /></li>
          <li><IconLinks href="https://www.linkedin.com/in/felixmontanez/" alt="linkedin" className="fa-brands fa-linkedin fa-lg" /></li>
          <li><IconLinks href="https://www.twitch.tv/thevoiceofkojie" className="fa-brands fa-twitch fa-lg" alt="twitch" /></li>
        </StyledList>
      </NavContainer>

    </footer>
  );
};

export default Footer;
