import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import "../styles/index.css";

import Avatar from "../components/Avatar";
import paypal from "../assets/paypal_qrcode.png";
import vader from "../assets/me/vaderbong.jpg";
import oranges from "../assets/me/starwarsorange.jpg";
import pixarMe from "../assets/me/PixarMe.jpg";
import cozy from "../assets/me/CozyNookBed.jpg";
import venmo from "../assets/venmo_qrcode2.png";
import ghibliMe from "../assets/me/GhibliMe.jpg";
import cartoonMe from "../assets/me/cartoonMe.jpg";
import drummerMe from "../assets/me/GhibliDrummerMe.jpg";
import singingMe from "../assets/me/GhibliSingingMe.jpg";

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;  
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
  background : linear-gradient(to right, #582eb5, #805ad5);
  color: ${(props) => props.theme.color.on.background};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 5px;
    margin-right: auto;
  }
`;


const StyledDiv = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.color.on.surface};
  font-family: ${(props) => props.theme.fonts.secondary};  
`;

const RoundedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
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
    margin: auto 10px;
    border-radius: 15px;
  }
`;

const ImageIcons = styled(Avatar)`
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledHeading = styled.h3`
  color: ${(props) => props.theme.color.on.header};
  font-family: "Alfa Slab One", serif;
  font-weight: 400;
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 48px;
  padding-top: 10px;
`;

const StyledParagraph = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 18px;
  line-height: 1.6;
`;

const IconLinks = (props) => {
  const { href, className, alt } = props;
  return (<a href={href} target="_blank" rel="noopener noreferrer" alt={alt}><i className={className}></i></a>);
};

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
    <div className="text-left ">
      <Helmet>
        <title>Kojie : Voice Over Actor</title>
        <link rel="canonical" href="http://www.twelve.community" />
        <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
        <meta name="dkeywords" content="Kojie, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />
      </Helmet>
      <Wrapper>

        <Container id="intro" className="intro">
          <StyledDiv className="column">
            <RoundedImageContainer>
              <ImageIcons image={cartoonMe} width="350px" />
            </RoundedImageContainer>
          </StyledDiv>
          <StyledDiv className="column">
            <StyledHeading className="cover-heading">Creative Storyteller</StyledHeading>
            <StyledParagraph>Renowned for a deep, smooth, and soothing voice, I specialize in bringing warmth, clarity, and professionalism to every project. Whether it's commercial, narration, or animation voice-over work, I deliver captivating performances that engage and relax audiences.</StyledParagraph>
            <StyledHeading className="cover-heading">Let's work together</StyledHeading>
            <StyledList className="social-icons">
              <li><IconLinks href="mailto:felix.montanez@gmail.com?subject=Voice%20Over%20Inquiry" className="fa-solid fa-envelope fa-2xl" alt="email" /></li>
              <li><IconLinks href="https://www.facebook.com/profile.php?id=100088510260448" className="fa-brands fa-facebook fa-2xl" alt="facebook" /></li>
              <li><IconLinks href="https://www.youtube.com/@thevoiceofkojie" className="fa-brands fa-youtube fa-2xl" alt="youtube" /></li>
              <li><IconLinks href="https://t.co/TK8wXby4uA" alt="instagram" className="fa-brands fa-instagram fa-2xl" /></li>
              <li><IconLinks href="https://www.tiktok.com/@thevoiceofkojie?_t=ZP-90ZSOlSrCVr&_r=1" alt="tiktok" className="fa-brands fa-tiktok fa-2xl" /></li>
              <li><IconLinks href="https://x.com/kojiemontanez" alt="twitter, x" className="fa-brands fa-twitter fa-2xl" /></li>
              <li><IconLinks href="https://www.linkedin.com/in/felixmontanez/" alt="linkedin" className="fa-brands fa-linkedin fa-2xl" /></li>
              <li><IconLinks href="https://www.twitch.tv/thevoiceofkojie" className="fa-brands fa-twitch fa-2xl" alt="twitch" /></li>
            </StyledList>
          </StyledDiv>
        </Container>

        <Container className="demo ">
          <StyledDiv className="column">
            <ImageContainer>
              <ImageIcons image={ghibliMe} width="333px" />
            </ImageContainer>
          </StyledDiv>
          <StyledDiv className="column">
            <StyledHeading>Demos</StyledHeading>
            <StyledParagraph>
              <figure>
                <figcaption>Commercial</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Corporate</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Character Animation</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Magic Trailers &amp; Announcers</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
              <figure>
                <figcaption>Calm, Casual and Conversational</figcaption>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
            </StyledParagraph>
          </StyledDiv>
          <StyledDiv className="column">
            <StyledHeading className="cover-heading">VO Projects</StyledHeading>
            <StyledParagraph>
              <figure>
                <figcaption>&ldquo;We Win Wednesdays&rdquo; podcast On Spotify</figcaption>
                <p><a href="https://creators.spotify.com/pod/profile/shamelessla/" target="_blank" rel="noopener noreferrer">Shameless LA</a></p>
                <audio controls src="https://twelve-app.s3.us-west-1.amazonaws.com/EpisodeOne_ShamelessLA_January2024.mp3"></audio>
              </figure>
            </StyledParagraph>
            <StyledParagraph>Aristocrat Gaming : created videos with voice over narration for various casino clients, explainer videos for app store submittals.</StyledParagraph>
            <StyledParagraph> Meta (Facebook) : Voice Sound Test. Provided voice talent to help test audio equipment throughout the top recording studios in Los Angeles and Burbank.</StyledParagraph>
          </StyledDiv>
        </Container>

        <Container id="recovery" className="recovery">
          <StyledDiv className="column">
            <ImageContainer>
              <ImageIcons image={singingMe} width="333px" />
            </ImageContainer>
            <StyledHeading className="cover-heading">My Service</StyledHeading>
            <StyledParagraph>Hi, I'm Kojie, an adult child of an alcoholic from a dysfunctional home currently in ACA recovery as well as a dedicated voice-over actor based in Los Angeles, California. With a deep, smooth, and soothing voice, I specialize in creating comforting and engaging audio for recovery communities. I&rsquo;m proud to be part of projects like the &ldquo;We Win Wednesdays Shameless LA&rdquo; Spotify podcast, supporting fellowship and connection through empathetic and inspiring narration. My goal is to bring warmth and understanding to every message, helping listeners feel seen, heard, and motivated on their recovery journey.</StyledParagraph>
          </StyledDiv>
          <StyledDiv className="column">
            <ImageContainer>
              <ImageIcons image={drummerMe} width="333px" />
            </ImageContainer>
            <StyledHeading className="cover-heading">Shameless LA</StyledHeading>
            <StyledParagraph>These brief shares were recorded with permission from the <a href="https://creators.spotify.com/pod/profile/shamelessla/" target="_blank" rel="noopener noreferrer">Shameless LA</a> We Win Wednesdays ACA meeting. </StyledParagraph>

            <StyledDiv>
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
            </StyledDiv>
          </StyledDiv>
        </Container>

        <Container id="donate" className="donate">
          <StyledDiv className="column">
            <ImageContainer>
              <ImageIcons image={pixarMe} width="333px" />
            </ImageContainer>
          </StyledDiv>
          <StyledDiv className="column">
            <StyledHeading className="cover-heading">Please Donate</StyledHeading>
            <StyledParagraph>
              Support my work and help me create more impactful audio projects by donating via Venmo or PayPal. Your support allows me to continue delivering quality voice-over content and to grow this career. Thank you for your support! You can donate through the following platforms:
            </StyledParagraph>

            <StyledList className="donation-icons">
              <li>
                <p>Venmo: @Kojie-Montanez<br />Last 4 : 6416</p>
                <ImageContainer>
                  <ImageIcons image={venmo} height="200px" />
                </ImageContainer>
              </li>
              <li>
                <p><IconLinks href="https://www.paypal.com/paypalme/felixmontanez" alt="paypal link" className="fa-brands fa-paypal fa-2xl" /></p>
                <ImageContainer>
                  <ImageIcons image={paypal} height="200px" />
                </ImageContainer>
              </li>
            </StyledList>
          </StyledDiv>

        </Container>
      </Wrapper>
    </div>
  );
};

export default Landing;
