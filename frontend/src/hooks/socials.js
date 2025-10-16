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
    <div className="text-left cover-container d-flex p-1 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Contact</title>
        <link rel="canonical" href="http://www.twelve.community/contact" />
        <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
        <meta name="keywords" content="Kojie, voice over, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />
      </Helmet>
      <Wrapper>
        <Container>
          <StyledParagraph>
            <h3 className="cover-heading"> Socials </h3>
            <p>Follow me on social media to stay updated on my latest projects and collaborations:</p>
            <p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100088510260448" target="_blank" rel="noopener noreferrer" alt="facebook">Facebook</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@thevoiceofkojie" target="_blank" rel="noopener noreferrer" alt="youtube">YouTube : The Voice Of Kojie</a>
                </li>
                <li>
                  <a href="https://t.co/TK8wXby4uA" target="_blank" rel="noopener noreferrer" alt="instagram">Instagram : @kojiemontanez</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@thevoiceofkojie?_t=ZP-90ZSOlSrCVr&_r=1" target="_blank" rel="noopener noreferrer" alt="tiktok">TikTok : TheVoiceOfKojie</a>
                </li>
                <li>
                  <a href="https://x.com/kojiemontanez" target="_blank" rel="noopener noreferrer" alt="twitter, x">Twitter : @kojiemontanez</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/felixmontanez/" target="_blank" rel="noopener noreferrer" alt="linkedin">LinkedIn Profile</a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/thevoiceofkojie" target="_blank" rel="noopener noreferrer" alt="twitch">Twitch : The Voice Of Kojie</a>
                </li>
              </ul>
            </p>
          </StyledParagraph>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Contact;
