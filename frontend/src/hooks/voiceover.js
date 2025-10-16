import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import kojie from "../assets/Kojie.jpg";

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
  text-align: left;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 20px;
    margin-right: auto;
  }
`;

const StyledParagraph = styled.p`
  padding: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  img {
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 25px;
  }
`;
const ImageIcons = styled(Avatar)`
  margin-left: 10px;
  margin-right: 10px;
`;

const VoiceOver = () => {
    return (
        <div className="text-left cover-container d-flex p-1 mx-auto flex-column">
            <Helmet>
                <title>Twelve : VoiceOver</title>
                <link rel="canonical" href="http://www.twelve.community/voiceover" />
                <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
                <meta name="keywords" content="Kojie, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />

            </Helmet>
            <Wrapper>
                <Container>
                    <main role="main" className="inner cover">
                        <h3 className="cover-heading">Commercial Demo</h3>
                        <StyledParagraph>
                            <p>Listen close, I want to sell a product or service.</p>
                        </StyledParagraph>
                        <h3 className="cover-heading">Corporate Demo</h3>
                        <StyledParagraph>
                            <p>The business training seminar voice to educate the mass.</p>
                        </StyledParagraph>
                        <h3 className="cover-heading">Animation Demo</h3>
                        <StyledParagraph>
                            <p>yuk, yuk..all types of goofy stuff</p>
                        </StyledParagraph>
                        <h3 className="cover-heading">Trailers &amp; Announcers</h3>
                        <StyledParagraph>
                            <p>Magic Radio 98.9, In a theater, coming soon...</p>
                        </StyledParagraph>
                        <h3 className="cover-heading">Podcasts</h3>
                        <StyledParagraph>
                            <p>'We Win Wednesdays Shameless LA' podcast on Spotify</p>
                        </StyledParagraph>
                    </main>
                </Container>
            </Wrapper>
        </div>
    );
};

export default VoiceOver;
