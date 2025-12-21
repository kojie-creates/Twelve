import React from "react";
import { Helmet } from "react-helmet-async";

import "../styles/index.css";
import {
  Wrapper,
  Container,
  StyledDiv,
  StyledHeading,
  IconLinks,
  RoundedImageContainer,
  ImageIcons,
  StyledList,
  StyledParagraph,
  ImageContainer
} from "../styles/styled.js";

import paypal from "../assets/donation/paypal_qrcode.png";
import venmo from "../assets/donation/venmo_qrcode2.png";
import shamelessLogo from "../assets/logos/shamelesslogo.jpg";

import animeMe from '../assets/me/animeMe.jpg';
import kojie from "../assets/me/Kojie.jpg";
import pixarMe from "../assets/me/PixarMe.jpg";
import drummerMe from "../assets/me/GhibliDrummerMe.jpg";
import singingMe from "../assets/me/GhibliSingingMe.jpg";

import hernan from "../assets/audio/hernan.mp3";
import s25test from '../assets/audio/S25demo.mp3';
import TD from "../assets/audio/TD.mp3";
import veronica from "../assets/audio/veronica.mp3";

const Landing = () => {
  return (
    <div class="container-fluid" >
      <Helmet>
        <title>Kojie : Voice Over Actor</title>
        <link rel="canonical" href="http://www.twelve.community" />
        <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
        <meta name="keywords" content="Kojie, voice over, voice over actor, voice-over actor, Los Angeles, voice talent, commercial voice-over,  narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />
      </Helmet>
      <Wrapper>

        <Container id="intro" className="row">
          <StyledDiv className="column col-md-6">
            <RoundedImageContainer>
              <ImageIcons image={animeMe} width="233px" />
            </ RoundedImageContainer>
          </StyledDiv>
          <StyledDiv className="column col-md-6">
            <StyledHeading className="cover-heading">Creative Storyteller</StyledHeading>
            <StyledParagraph>With my deep, smooth, and soothing voice, I aim to bring warmth, clarity, and professionalism to your projects—helping your message connect authentically with your audience. Whether for commercials, narration, or animation, I am dedicated to delivering performances that captivate and leave a lasting impression. I would love to bring your vision to life!  </StyledParagraph>
          </StyledDiv>
        </Container>

        <Container id="demos" className="row">
          <StyledDiv className="column col-md-6">
            <ImageContainer>
              <ImageIcons image={singingMe} width="233px" />
            </ImageContainer>
          </StyledDiv>
          <StyledDiv className="column col-md-6">
            <StyledHeading className="cover-heading">VO Demos</StyledHeading>
            <StyledParagraph>
              <StyledDiv>
                <figure>
                  <figcaption>Commercial, Narration</figcaption>
                  <audio controls src={s25test}></audio>
                </figure>
              </StyledDiv>
              <StyledDiv>
                <figure>
                  <figcaption>Animation, Radio Imaging </figcaption>
                  <audio controls src={s25test}></audio>
                </figure>
              </StyledDiv>
            </StyledParagraph>
          </StyledDiv>
          <StyledDiv className="column col-md-6">
            <StyledHeading className="cover-heading">My Socials</StyledHeading>
            <StyledParagraph>
              <StyledList className="social-icons">
                <li><IconLinks href="https://t.co/TK8wXby4uA" alt="instagram" className="fa-brands fa-instagram fa-2xl" /></li>
                <li><IconLinks href="https://www.tiktok.com/@thevoiceofkojie?_t=ZP-90ZSOlSrCVr&_r=1" alt="tiktok" className="fa-brands fa-tiktok fa-2xl" /></li>
                <li><IconLinks href="https://www.youtube.com/@thevoiceofkojie" className="fa-brands fa-youtube fa-2xl" alt="youtube" /></li>
                <li><IconLinks href="https://www.facebook.com/profile.php?id=100088510260448" className="fa-brands fa-facebook fa-2xl" alt="facebook" /></li>
                <li><IconLinks href="https://x.com/kojiemontanez" alt="twitter, x" className="fa-brands fa-twitter fa-2xl" /></li>
              </StyledList>
            </StyledParagraph>
          </StyledDiv>

        </Container>

        <Container id="projects" className="row">
          <StyledDiv className="column col-md-6">
            <ImageContainer>
              <ImageIcons image={drummerMe} width="333px" />
            </ImageContainer>
          </StyledDiv>
          <StyledDiv className="column col-md-6">
            <StyledHeading className="cover-heading">VO Projects</StyledHeading>
            <StyledParagraph>&ldquo;We Win Wednesdays&rdquo; <a className="brand-link" href="https://creators.spotify.com/pod/profile/shamelessla/" target="_blank" rel="noopener noreferrer">Shameless LA</a> podcast On Spotify</StyledParagraph>
            <StyledParagraph>Aristocrat Gaming : created videos with voice over narration for various casino clients, explainer videos for app store submittals.</StyledParagraph>
            <StyledParagraph> Meta (Facebook) : Voice Sound Test. Provided voice talent to help test audio equipment throughout the top recording studios in Los Angeles and Burbank.</StyledParagraph>
            <StyledParagraph>Eleven Labs : Voice Clone used by 755 users with over 1.4 millions of characters used within the last 3 months.</StyledParagraph>
          </StyledDiv>
        </Container>

        <Container id="recovery" className="row">
          <StyledDiv className="column col-md-6">
            <RoundedImageContainer className="text-center">
              <ImageIcons image={kojie} width="233px" />
            </RoundedImageContainer>
            <StyledHeading className="cover-heading text-center">About Me</StyledHeading>
            <StyledParagraph>Hi, I'm Kojie, a dedicated voice-over actor based in Los Angeles, California. I'm also a recovering adult child of an alcoholic from a dysfunctional home currently in ACA recovery. With a deep, smooth, and soothing voice, I specialize in creating comforting and engaging audio for twelve step recovery communities. I&rsquo;m proud to be part of projects like the &ldquo;We Win Wednesdays Shameless LA&rdquo; Spotify podcast, supporting fellowship and connection through empathetic and inspiring narration. My goal is to bring warmth and understanding to every message, helping listeners feel seen, heard, and motivated on their recovery journey.</StyledParagraph>
          </StyledDiv>
          <StyledDiv className="column col-md-6">
            <ImageContainer>
              <ImageIcons image={shamelessLogo} width="233px" />
            </ImageContainer>
            <StyledHeading className="cover-heading  text-center">Shameless LA</StyledHeading>
            <StyledParagraph>The following vignettes offer a variety of ACA experiences in recovery. These brief stories were voluntarily recorded during the <a className="brand-link" href="https://creators.spotify.com/pod/profile/shamelessla/" target="_blank" rel="noopener noreferrer">Los Angeles Shameless Adult Children of Alcoholics</a> meetings.</StyledParagraph>
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

        <Container id="donate" className="row">
          <StyledDiv className="row">
            <StyledDiv className="column col-md-6">
              <ImageContainer>
                <ImageIcons image={pixarMe} width="233px" />
              </ImageContainer>
            </StyledDiv>
            <StyledDiv className="column col-md-6">
              <StyledHeading className="cover-heading">Donations Appreciated!</StyledHeading>
              <StyledParagraph>
                Hey, if you are moved to support my voice-over journey, it really means the world.
                Your kindness helps me keep making impactful stuff like readings for the blind, voice cloning for accessibility, and more.
                Every little bit allows me to keep doing what I love — with humor, love, and respect.
                Thanks so much for being part of this with me — it truly makes a difference!
              </StyledParagraph>
              <StyledDiv className="row">
                <StyledDiv className="column">
                  <StyledList className="donation-icons ">
                    <li >
                      <p>Venmo: @Kojie-Montanez<br />Last 4 : 6416</p>
                      <ImageContainer>
                        <ImageIcons image={venmo} width="133px" />
                      </ImageContainer>
                    </li>
                    <li ><p> Paypal: felix.montanez@gmail.com</p>
                      <IconLinks href="https://www.paypal.com/paypalme/felixmontanez" alt="paypal link" className="fa-brands fa-paypal fa-2xl" />
                      <ImageContainer>
                        <ImageIcons image={paypal} width="133px" />
                      </ImageContainer>
                    </li>
                  </StyledList>
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>

        </Container>

      </Wrapper>
    </div>
  );
};

export default Landing;
