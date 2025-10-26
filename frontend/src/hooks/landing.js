import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import "../styles/index.css";

import Avatar from "../components/Avatar";

import paypal from "../assets/donation/paypal_qrcode.png";
import venmo from "../assets/donation/venmo_qrcode2.png";
import shamelessLogo from "../assets/logos/shamelesslogo.jpg";

import animeMe from '../assets/me/animeMe.jpg';
import kurtz from '../assets/me/result.jpeg';
import kojie from "../assets/me/Kojie.jpg";
import pixarMe from "../assets/me/PixarMe.jpg";
import drummerMe from "../assets/me/GhibliDrummerMe.jpg";
import singingMe from "../assets/me/GhibliSingingMe.jpg";
import hernan from "../assets/audio/hernan.mp3";

import s25test from '../assets/audio/S25TestAI.mp3';

import TD from "../assets/audio/TD.mp3";
import veronica from "../assets/audio/veronica.mp3";

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;
  background : ${(props) => props.theme.color.background};
`;

const Container = styled.div`
  max-width: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px 10px;
  text-align: left;
  background : ${(props) => props.theme.color.surface};
  color: ${(props) => props.theme.color.on.surface};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledDiv = styled.div`
 max-width: fit-content;
  padding: 10px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.secondary}; 
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } 
`;

const RoundedImageContainer = styled.div`
   
  align-items: center;
   
  img {
    margin: auto 10px;
    border-radius: 50%; 
    border: 10px solid ${(props) => props.theme.color.primary}; 
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  img {
    margin: auto 10px;
    border-radius: 15px;
    border: 10px solid ${(props) => props.theme.color.primary}; 
  }
`;

const ImageIcons = styled(Avatar)`
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledHeading = styled.h3`
  color: ${(props) => props.theme.color.header};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 400;
  font-style: normal;
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
    a {
      color: ${(props) => props.theme.color.link};
    }
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
        <meta name="keywords" content="Kojie, voice over, voice over actor, voice-over actor, Los Angeles, voice talent, commercial voice-over,  narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />
      </Helmet>
      <Wrapper>
        <StyledDiv className="container-fluid column">

          <Container id="intro" className="intro">
            <StyledDiv className="column">
              <RoundedImageContainer>
                <ImageIcons image={animeMe} width="333px" />
              </ RoundedImageContainer>
            </StyledDiv>
            <StyledDiv className="column">
              <StyledHeading className="cover-heading">Creative Storyteller</StyledHeading>
              <StyledParagraph>With my deep, smooth, and soothing voice, I aim to bring warmth, clarity, and professionalism to your projects—helping your message connect authentically with your audience. Whether for commercials, narration, or animation, I am dedicated to delivering performances that captivate and leave a lasting impression. I would love to bring your vision to life!  </StyledParagraph>
              <StyledHeading className="cover-heading">Let's work together</StyledHeading>
              <StyledList className="social-icons">
                <li><IconLinks href="tel:+13104226416" className="fa-solid fa-phone fa-2xl" alt="mobile" /></li>
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
          <Container className="demo">
            <StyledDiv className="column">
              <ImageContainer>
                <ImageIcons image={singingMe} height="420px" />
              </ImageContainer>
            </StyledDiv>
            <StyledDiv className="column">
              <StyledHeading>Demos</StyledHeading>
              <StyledParagraph>
                <StyledDiv>
                  <figure>
                    <figcaption>Commercial Reel: A versatile collection of voiceovers for print, TV, and online ads across lifestyle, automotive, and more</figcaption>
                    <audio controls src={s25test}></audio>
                  </figure>
                  <figure>
                    <figcaption>Industrial/Corporate Demos: Corporate and instructional voice samples showing professionalism and clarity.</figcaption>
                    <audio controls src=""></audio>
                  </figure>
                  <figure>
                    <figcaption>Narration Demos: Voice demos for documentaries, e-learning, and audiobooks highlighting storytelling and clarity</figcaption>
                    <audio controls src=""></audio>
                  </figure>
                  <figure>
                    <figcaption>Radio Imaging: Short, energetic clips for radio branding—station IDs, promos, and signature sounds</figcaption>
                    <audio controls src=""></audio>
                  </figure>
                  <figure>
                    <figcaption>Television Promo: Demos that build excitement, suspense, or intrigue for TV shows and events</figcaption>
                    <audio controls src=""></audio>
                  </figure>
                </StyledDiv>
              </StyledParagraph>

            </StyledDiv>
            <StyledDiv className="column">
              <StyledDiv className="column">
                <ImageContainer>
                  <ImageIcons image={drummerMe} width="420px" />
                </ImageContainer>
              </StyledDiv>

              <StyledDiv className="column">
                <StyledHeading className="cover-heading">VO Projects</StyledHeading>
                <p>&ldquo;We Win Wednesdays&rdquo; <a href="https://creators.spotify.com/pod/profile/shamelessla/" target="_blank" rel="noopener noreferrer">Shameless LA</a> podcast On Spotify</p>
              </StyledDiv>
              <StyledParagraph>Aristocrat Gaming : created videos with voice over narration for various casino clients, explainer videos for app store submittals.</StyledParagraph>
              <StyledParagraph> Meta (Facebook) : Voice Sound Test. Provided voice talent to help test audio equipment throughout the top recording studios in Los Angeles and Burbank.</StyledParagraph>
              <StyledParagraph>Eleven Labs : Voice Clone used by 755 users with over 1.4 millions of characters used within the last 3 months.</StyledParagraph>
            </StyledDiv>
          </Container>
          <Container id="recovery" className="recovery">
            <StyledDiv className="column">
              <RoundedImageContainer>
                <ImageIcons image={kojie} height="420px" />
              </RoundedImageContainer>
              <StyledHeading className="cover-heading">About Me</StyledHeading>
              <StyledParagraph>Hi, I'm Kojie, a dedicated voice-over actor based in Los Angeles, California. I'm also a recovering adult child of an alcoholic from a dysfunctional home currently in ACA recovery. With a deep, smooth, and soothing voice, I specialize in creating comforting and engaging audio for twelve step recovery communities. I&rsquo;m proud to be part of projects like the &ldquo;We Win Wednesdays Shameless LA&rdquo; Spotify podcast, supporting fellowship and connection through empathetic and inspiring narration. My goal is to bring warmth and understanding to every message, helping listeners feel seen, heard, and motivated on their recovery journey.</StyledParagraph>
            </StyledDiv>
            <StyledDiv className="column">
              <ImageContainer>
                <ImageIcons image={shamelessLogo} width="420px" />
              </ImageContainer>
              <StyledHeading className="cover-heading">Shameless LA</StyledHeading>
              <StyledParagraph>The following vignettes offer a variety of ACA experiences in recovery. These brief stories were voluntarily recorded during the <a href="https://creators.spotify.com/pod/profile/shamelessla/" target="_blank" rel="noopener noreferrer">Los Angeles Shameless Adult Children of Alcoholics</a> meetings.</StyledParagraph>
              <StyledParagraph>Join us Wednesdays at 7pm PST via Zoom. ID: 991-2976-1110 Passcode: 412232</StyledParagraph>
              <StyledDiv>
                <figure>
                  <figcaption>ACA TD - August 2025</figcaption>
                  <audio controls src={TD}></audio>
                </figure>
                <figure>
                  <figcaption>ACA Veronica - Sept 2025</figcaption>
                  <audio controls src={veronica}></audio>
                </figure>
                <figure>
                  <figcaption>ACA Hernan - October 2025</figcaption>
                  <audio controls src={hernan}></audio>
                </figure>
              </StyledDiv>
            </StyledDiv>
          </Container>
          <Container id="donate" className="donate">
            <StyledDiv className="column">
              <ImageContainer>
                <ImageIcons image={pixarMe} height="420px" />
              </ImageContainer>
            </StyledDiv>
            <StyledDiv className="column">
              <StyledHeading className="cover-heading">Donations welcome</StyledHeading>
              <StyledParagraph>
                Hey, if you are moved to support my voice-over journey, it really means the world. Your kindness helps me keep making impactful stuff like readings for the blind, voice cloning for accessibility, and more. Every little bit allows me to keep doing what I love — with humor, love, and respect. Thanks so much for being part of this with me — it truly makes a difference!  You can donate through the following platforms:
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
        </StyledDiv>
      </Wrapper>
    </div>
  );
};

export default Landing;
