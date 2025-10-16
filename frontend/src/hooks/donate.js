import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import paypal from "../assets/paypal_qrcode.png";
import venmo from "../assets/venmo_qrcode2.png";

import Avatar from "../components/Avatar";
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
  padding: 20px;
`;

const StyledListItem = styled.li`
  padding: 10px 0;
    list-style-type: none;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  img {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const ImageIcons = styled(Avatar)`
  margin-left: 10px;
  margin-right: 10px;
`;

const Donate = () => {
  return (
    <div className="text-left cover-container d-flex p-1 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Donate</title>
        <link rel="canonical" href="http://www.twelve.community/donate" />
        <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
        <meta name="keywords" content="Kojie, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />

      </Helmet>
      <Wrapper>
        <Container>
          <StyledParagraph>
            <h3 className="cover-heading"> Donate </h3>
            <p>Support my work and help me create more impactful audio projects by donating via Venmo or PayPal.
              Your support allows me to continue delivering quality voice-over content and to grow this career. <p>Thank you for your support!</p>You can donate through the following platforms:</p>

            <StyledParagraph>Venmo: @Kojie-Montanez (6416)</StyledParagraph>
            <ImageContainer>
              <ImageIcons image={venmo} height="200px" />
            </ImageContainer>

            <StyledParagraph>PayPal: <a href="https://www.paypal.com/paypalme/felixmontanez" alt="paypal link">PayPal Link</a></StyledParagraph>
            <ImageContainer>
              <ImageIcons image={paypal} height="200px" />
            </ImageContainer>
          </StyledParagraph>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Donate;
