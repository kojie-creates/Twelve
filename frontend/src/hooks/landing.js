import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import Book from '../components/Book';

import paypal from "../assets/paypal_qrcode.png";
import venmo from "../assets/venmo_qrcode2.png";

// books
import anewhope from '../assets/ANewHope_Cover.jpg';
import bigredbook from '../assets/BigRedBook_Cover.jpg';
import lovingparentguidebook from '../assets/LovingParentGuideBook_cover.jpg';
import strengtheningmyrecovery from '../assets/StrengtheningMyRecovery_cover.jpg';


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
        <StyledParagraph className="text-left">
          <h1>Recorded Episodes</h1>
          <h3>Shameless LA We Win Wednesdays</h3>
          <p>These brief shares were recorded with permission from the Los Angleles ACA We Win Wednesdays meeting.</p>
          <figure>
            <figcaption>Episode One - ACA We Win Wednesdays, January 2024</figcaption>
            <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
          </figure>
        </StyledParagraph>
        <StyledParagraph className="text-left">
          <h1 className="text-left">Recorded Literature</h1>
          <Book title={"A New Hope"} image={anewhope} subtitle={"ACA Beginner's Handbook"}></Book>
          <Book title={"Strengthening My Recovery"} image={strengtheningmyrecovery} subtitle={"Our Daily Reader"}></Book>
          <Book title={"Loving Parent GuideBook"} image={lovingparentguidebook} subtitle={"The solution is to become your own loving parent"}></Book>
          <Book title={"ACA Fellowship Text"} image={bigredbook} subtitle={"The Big Red Book"}></Book>
        </StyledParagraph>
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
