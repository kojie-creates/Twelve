import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import kojie from "../assets/Kojie.jpg";
import paypal from "../assets/paypal_qrcode.png";
import venmo from "../assets/venmo_qrcode2.png";

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

const Landing = () => {
  return (
    <div className="text-left cover-container d-flex p-3 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Welcome</title>
        <link rel="canonical" href="http://www.twelve.community" />
        <meta
          name="keywords"
          content="spiritual,based,social,platform,Anonymity,designing principle,recovery,purpose,connection,modern technology"
        />
      </Helmet>
      <Wrapper>
        <Container>
          <main role="main" className="inner cover">
            <ImageContainer>
              <ImageIcons image={kojie} height="300px" />
            </ImageContainer>
            <StyledParagraph>
              <h3 className="cover-heading">Voice Over</h3>
              Meet Kojie, a talented independent voice-over actor based in Los Angeles, California. Renowned for a deep, smooth, and soothing voice, Kojie specializes in bringing warmth, clarity, and professionalism to every project. Whether it's commercial, narration, or animation voice-over work, Kojie delivers captivating performances that engage and relax audiences. With a commitment to excellence and a versatile vocal style, Kojie is the ideal choice for projects that demand a memorable and calming voice.
            </StyledParagraph>
            <StyledParagraph>
              <h3 className="cover-heading"> Recovery</h3>
              Hi, I'm Kojie, a dedicated voice-over actor based in Los Angeles, California. With a deep, smooth, and soothing voice, I specialize in creating comforting and engaging audio for recovery communities. I’m proud to be part of projects like the "We Win Wednesdays Shameless LA" Spotify podcast, supporting fellowship and connection through empathetic and inspiring narration. My goal is to bring warmth and understanding to every message, helping listeners feel seen, heard, and motivated on their recovery journey.
            </StyledParagraph>
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
            
          </main>
        </Container>
      </Wrapper>

    </div>
  );
};

export default Landing;
