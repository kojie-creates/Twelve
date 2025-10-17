import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import "../styles/index.css";

import Avatar from "../components/Avatar";
import kojie from "../assets/Kojie.jpg";
import paypal from "../assets/paypal_qrcode.png";
import venmo from "../assets/venmo_qrcode2.png";

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;
  background-color: ${(props) => props.theme.color.background};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 10px;
  text-align: left;
  background : linear-gradient(to right, #805ad5, #582eb5);
  color: ${(props) => props.theme.color.on.background};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 5px;
    margin-right: auto;
  }
`;

const StyledHeading = styled.h3`
  color: ${(props) => props.theme.color.on.header};
  font-family: "Alfa Slab One", serif;
  font-weight: 400;
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 48px;
`;

const StyledParagraph = styled.p`
  padding: 10px;
  color: ${(props) => props.theme.color.on.surface};
  font-family: ${(props) => props.theme.fonts.secondary};
  
`;

const RoundedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 50%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const ImageIcons = styled(Avatar)`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 0px;
  li {
  padding: 10px; 
    display: inline-block;
    margin-right: 10px;
  }
    li.donation-icons {
    min-height: 300px;
    padding: 10px;
    display: inline-block;
    margin-bottom: 20px;
  }

`;

const Landing = () => {
  return (
    <div className="text-left cover-container d-flex p-1 mx-auto flex-column">
      <Helmet>
        <title>Twelve : Welcome</title>
        <link rel="canonical" href="http://www.twelve.community" />

        <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
        <meta name="dkeywords" content="Kojie, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />
      </Helmet>
      <Wrapper>
        <Container id="intro" class="intro">

          <StyledParagraph className="column">
            <RoundedImageContainer>
              <ImageIcons image={kojie} height="300px" />
            </RoundedImageContainer>
          </StyledParagraph>

          <StyledParagraph className="column">
            <StyledHeading className="cover-heading">Creative Storyteller</StyledHeading>
            Renowned for a deep, smooth, and soothing voice, I specialize in bringing warmth, clarity, and professionalism to every project. Whether it's commercial, narration, or animation voice-over work, I deliver captivating performances that engage and relax audiences.
            <br /><br />
            <StyledHeading className="cover-heading">Let's work together</StyledHeading>
            <StyledList class="social-icons">
              <li>
                <a href="mailto:felix.montanez@gmail.com?subject=Voice%20Over%20Inquiry" target="_blank" alt="email"><i class="fa-solid fa-envelope fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100088510260448" target="_blank" rel="noopener noreferrer" alt="facebook"><i class="fa-brands fa-facebook fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://www.youtube.com/@thevoiceofkojie" target="_blank" rel="noopener noreferrer" alt="youtube"><i class="fa-brands fa-youtube fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://t.co/TK8wXby4uA" target="_blank" rel="noopener noreferrer" alt="instagram"><i class="fa-brands fa-instagram fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@thevoiceofkojie?_t=ZP-90ZSOlSrCVr&_r=1" target="_blank" rel="noopener noreferrer" alt="tiktok"><i class="fa-brands fa-tiktok fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://x.com/kojiemontanez" target="_blank" rel="noopener noreferrer" alt="twitter, x"><i class="fa-brands fa-twitter fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/felixmontanez/" target="_blank" rel="noopener noreferrer" alt="linkedin"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
              </li>
              <li>
                <a href="https://www.twitch.tv/thevoiceofkojie" target="_blank" rel="noopener noreferrer" alt="twitch"><i class="fa-brands fa-twitch fa-2xl"></i></a>
              </li>
            </StyledList>
          </StyledParagraph>

        </Container>

        <Container id="demo" class="demo">
          <section role="section" className="inner cover">
            <StyledHeading className="cover-heading">Demos</StyledHeading>
            <StyledParagraph>
              <figure>
                <figcaption>Commercial Demo : Listen close, I want to sell a product or service.</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Corporate Demo : The business training seminar voice to educate the mass.</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Animation Demo : yuk, yuk..all types of goofy stuff!</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Trailers &amp; Announcers: Magic Radio 98.9, In a theater, coming soon...</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>We Win Wednesdays Shameless LA: On Spotify</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
            </StyledParagraph>
          </section>
        </Container>
        <Container id="recovery" class="recovery">
          <StyledParagraph>

            <StyledHeading className="cover-heading">About Me</StyledHeading>
            <p>Hi, I'm Kojie, an adult child of an alcoholic from a dysfunctional home, as well as a dedicated voice-over actor based in Los Angeles, California. With a deep, smooth, and soothing voice, I specialize in creating comforting and engaging audio for recovery communities. I’m proud to be part of projects like the "We Win Wednesdays Shameless LA" Spotify podcast, supporting fellowship and connection through empathetic and inspiring narration. My goal is to bring warmth and understanding to every message, helping listeners feel seen, heard, and motivated on their recovery journey.</p>

            <br /><br />
            <StyledHeading className="cover-heading">Shameless LA on Spotify</StyledHeading>
            <h4>&ldquo; We Win Wednesdays &rdquo;</h4>
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
        </Container>
        <Container id="donate" class="donate">
          <StyledParagraph>
            <StyledHeading className="cover-heading">Please Donate</StyledHeading>
            <StyledParagraph>
              Support my work and help me create more impactful audio projects by donating via Venmo or PayPal. Your support allows me to continue delivering quality voice-over content and to grow this career. Thank you for your support! You can donate through the following platforms:
            </StyledParagraph>
            <StyledList class="donation-icons">
              <li>
                <p>Venmo: @Kojie-Montanez<br />Last 4 : 6416</p>
                <ImageContainer>
                  <ImageIcons image={venmo} height="200px" />
                </ImageContainer>
              </li>
              <li>
                <p><a href="https://www.paypal.com/paypalme/felixmontanez" target="_blank" rel="noopener noreferrer" alt="paypal link"><i class="fa-brands fa-paypal fa-2xl"></i></a></p>
                <ImageContainer>
                  <ImageIcons image={paypal} height="200px" />
                </ImageContainer>
              </li>
            </StyledList>
          </StyledParagraph>
        </Container>
      </Wrapper>

    </div>
  );
};

export default Landing;
