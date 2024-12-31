import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import paypal from "../assets/paypal_qrcode.png";
import venmo from "../assets/venmo_qrcode2.png";

const ImageIcons = styled(Avatar)`
  margin-left: 10px;
  margin-right: 10px;
`;

// Something here
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  margin-left: 10px;
`;

const StyledParagraph = styled.p`
  padding: 20px;
`;

const Landing = () => {
  return (
    <div className="text-center cover-container d-flex p-3 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Welcome</title>
        <link rel="canonical" href="http://www.twelve.community" />
        <meta
          name="keywords"
          content="spiritual,based,social,platform,Anonymity,designing principle,recovery,purpose,connection,modern technology"
        />
      </Helmet>
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Story Driven Recovery</h1>
        <StyledParagraph>
          Twelve Community is a spiritually-based, donation-welcomed social
          platform with a mission to deliver high-quality audio recordings that
          focus on recovery in various programs such as Alcoholics Anonymous,
          Codependents Anonymous and Adult Children of Alcoholic and
          Dysfunctional homes.
        </StyledParagraph>
        <StyledParagraph>
          Recordings are available in easy to digest formats with links for free
          publications.
        </StyledParagraph>
        <ImageContainer>
          <ImageIcons image={paypal} height="200px" />
          <ImageIcons image={venmo} height="200px" />
        </ImageContainer>
        <StyledParagraph>
          If you would like to support through donations, you can donate through
          paypal or venmo.
        </StyledParagraph>
      </main>
    </div>
  );
};

export default Landing;
