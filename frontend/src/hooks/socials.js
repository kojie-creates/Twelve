import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 150px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1200px;
  margin: 0px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 20px;
    margin-right: auto;
  }
`;

const StyledParagraph = styled.p`
  padding: 10px;
`;

const Contact = () => {
  return (
    <div className="text-left cover-container d-flex p-3 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Contact</title>
        <link rel="canonical" href="http://www.twelve.community/contact" />
        <meta
          name="keywords"
          content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
        />
      </Helmet>
      <Wrapper>
        <Container>
          <StyledParagraph>
              <h3 className="cover-heading"> Socials </h3>
              <p>Follow me on social media to stay updated on my latest projects and collaborations:</p>
              <p>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Tik Tok</li>
                  <li>Youtube</li>
                  <li>Twitch</li>
                  <li>LinkedIn</li>
                  <li>Facebook</li>
                </ul>
              </p>
            </StyledParagraph>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Contact;
