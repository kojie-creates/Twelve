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
          Twelve Community is a spiritually-based, donation-welcomed safe
          space with a mission to deliver high-quality audio recordings that
          focus on recovery in various programs such as Alcoholics Anonymous,
          Codependents Anonymous and Adult Children of Alcoholic and
          Dysfunctional homes.
        </StyledParagraph>
        <h1 className="text-left">Recorded Episodes</h1>
        <h3 className="text-left">Shameless LA We Win Wednesdays</h3>
        <StyledParagraph className="text-left">
          These brief shares were recorded with permission from the Los Angleles ACA We Win Wednesdays meeting.
        </StyledParagraph>
        <StyledParagraph className="text-left">
        <figure>
          <figcaption>Episode One - ACA We Win Wednesdays, January 2024</figcaption>
          <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
        </figure>
        </StyledParagraph>
       <h1 className="text-left">Recorded Literature</h1>
       <h3 className="text-left">A New Hope</h3>
        <br/>
        <StyledParagraph>
          If you would like to hear more literature, please consider support through charitable donations, through
          paypal or venmo.
        </StyledParagraph>
        <ImageContainer>
          <ImageIcons image={paypal} height="200px" />
          <ImageIcons image={venmo} height="200px" />
        </ImageContainer>

      </main>
    </div>
  );
};

export default Landing;
