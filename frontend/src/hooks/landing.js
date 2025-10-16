import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import kojie from "../assets/Kojie.jpg";
import paypal from "../assets/paypal_qrcode.png";
import venmo from "../assets/venmo_qrcode2.png";

const Wrapper = styled.div`
  padding: 0px;
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
    margin-left: 5px;
    margin-right: 5px;
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
    <div className="text-left cover-container d-flex p-1 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Welcome</title>
        <link rel="canonical" href="http://www.twelve.community" />

        <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
        <meta name="keywords" content="Kojie, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />

      </Helmet>
      <Wrapper>
        <Container>
          <main role="main" className="inner cover">
            <ImageContainer>
              <ImageIcons image={kojie} height="300px" />
            </ImageContainer>

            <StyledParagraph>
              <h3 className="cover-heading">Welcome to My Voice Over Portfolio</h3>
              Hello! My name is Kojie, a talented independent voice-over actor based in Los Angeles, California. Renowned for a deep, smooth, and soothing voice, I specialize in bringing warmth, clarity, and professionalism to every project. Whether it's commercial, narration, or animation voice-over work, I deliver captivating performances that engage and relax audiences. With a commitment to excellence and a versatile vocal style, I am the ideal choice for projects that demand a memorable and calming voice.
            </StyledParagraph>
          </main>
        </Container>
      </Wrapper>

    </div>
  );
};

export default Landing;
