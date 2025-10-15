import React from "react";
import { Router } from "@reach/router";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./hooks/landing";
import Recovery from "./hooks/recovery";
import VoiceOver from "./hooks/voiceover";
import Donate from "./hooks/donate";
import Socials from "./hooks/socials";

import { AuthContainer } from "./contexts/auth";

const App = () => {
  return (
    <AuthContainer isGlobal>
      <HelmetProvider>
        <Helmet>
          <title>Twelve : Welcome</title>
          <link rel="canonical" href="http://www.twelve.community" />
          <meta
            name="description"
            content="To create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation."
          />
          <meta
            name="keywords"
            content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
          />
        </Helmet>
        <Navbar />
        <Router>
          <Landing path="/" />
          <Recovery path="/recovery" />
          <VoiceOver path="/voiceover" />
          <Donate path="/donate" />
          <Socials path="/socials" />
        </Router>
        <Footer />
      </HelmetProvider>
    </AuthContainer>
  );
};

export default App;
