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
        <div className="text-left cover-container d-flex p-3 mx-auto flex-column">
            <Helmet>
                <title>Twelve : VoiceOver</title>
                <link rel="canonical" href="http://www.twelve.community/voiceover" />
                <meta
                    name="keywords"
                    content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
                />
            </Helmet>
            <Wrapper>
                <Container>
                    <main role="main" className="inner cover">
                        
                        <StyledParagraph>
                            <ImageContainer>
                                <ImageIcons image={kojie} height="300px" />
                            </ImageContainer>
                            <h3 className="cover-heading">Voice Over Demos</h3>
                            Meet Kojie, a talented independent voice-over actor based in Los Angeles, California. Renowned for a deep, smooth, and soothing voice, Kojie specializes in bringing warmth, clarity, and professionalism to every project. Whether it's commercial, narration, or animation voice-over work, Kojie delivers captivating performances that engage and relax audiences. With a commitment to excellence and a versatile vocal style, Kojie is the ideal choice for projects that demand a memorable and calming voice.
                        </StyledParagraph>
                        <h3 className="cover-heading">Commercial</h3>
                        <StyledParagraph>
                            <p>Commercial Demo placeholder</p>
                        </StyledParagraph>
                        <h3 className="cover-heading">Corporate</h3>
                        <StyledParagraph>
                            <p>Corporate Demo placeholder</p>
                        </StyledParagraph>
                        <h3 className="cover-heading">Animation</h3>
                        <StyledParagraph>
                            <p>Animation Demo placeholder</p>
                        </StyledParagraph>
                    </main>
                </Container>
            </Wrapper>
        </div>
    );
};

export default VoiceOver;
