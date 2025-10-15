import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import anewhope from '../assets/ANewHope_Cover.jpg';
import bigredbook from '../assets/BigRedBook_Cover.jpg';
import lovingparentguidebook from '../assets/LovingParentGuideBook_cover.jpg';
import strengtheningmyrecovery from '../assets/StrengtheningMyRecovery_cover.jpg';

import Avatar from "../components/Avatar";
import Book from "../components/Book";

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
const Recovery = () => {
    return (
        <div className="text-left cover-container d-flex p-3 mx-auto flex-column">
            <Helmet>
                <title>Twelve : Recovery</title>
                <link rel="canonical" href="http://www.twelve.community/recovery" />
                <meta
                    name="keywords"
                    content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
                />
            </Helmet>
            <Wrapper>
                <Container>
                    <h3 className="cover-heading"> Recovery</h3>
                    <StyledParagraph>
                        Hi, I'm Kojie, a dedicated voice-over actor based in Los Angeles, California. With a deep, smooth, and soothing voice, I specialize in creating comforting and engaging audio for recovery communities. I’m proud to be part of projects like the "We Win Wednesdays Shameless LA" Spotify podcast, supporting fellowship and connection through empathetic and inspiring narration. My goal is to bring warmth and understanding to every message, helping listeners feel seen, heard, and motivated on their recovery journey.
                    </StyledParagraph>
                    <StyledParagraph className="text-left">
                        <h1>Recorded Episodes</h1>
                        <h3>Shameless LA We Win Wednesdays</h3>
                        <p>These brief shares were recorded with permission from the Shameless LA We Win Wednesdays ACA meeting.</p>
                        <figure>
                            <figcaption>Episode One - Cookie, Ris, Padawan Marc, Diyan, Veronica, January 2024</figcaption>
                            <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
                        </figure>
                        <figure>
                            <figcaption>Episode Two - Ivanne, Marc C and Bridget Y, February 2024</figcaption>
                            <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeTwo_ShamelessLA_ACA.mp3.mp3"></audio>
                        </figure>
                        <figure>
                            <figcaption>Episode Three - Isaak, Colin & Katherine, March 2024</figcaption>
                            <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeThree-IsaakColinKatherineMarch2024.mp3"></audio>
                        </figure>
                    </StyledParagraph>
                    <StyledParagraph className="text-left">
                        <h1 className="text-left">Recorded Literature</h1>
                        <Book title={"A New Hope"} image={anewhope} subtitle={"ACA Beginner's Handbook"}></Book>
                        <Book title={"Strengthening My Recovery"} image={strengtheningmyrecovery} subtitle={"Our Daily Reader"}></Book>
                        <Book title={"Loving Parent GuideBook"} image={lovingparentguidebook} subtitle={"The solution is to become your own loving parent"}></Book>
                        <Book title={"ACA Fellowship Text"} image={bigredbook} subtitle={"The Big Red Book"}></Book>
                    </StyledParagraph>
                </Container>
            </Wrapper>
        </div>
    );
};

export default Recovery;
