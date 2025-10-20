import React from "react";
import { Router } from "@reach/router";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./contexts/theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./hooks/landing";

import { AuthContainer } from "./contexts/auth";

const App = () => {

  return (
    <AuthContainer isGlobal>
      <HelmetProvider>
        <Helmet>
          <title>Twelve : Welcome</title>
          <link rel="canonical" href="http://www.twelve.community" />
          <meta name="description" content="Meet Kojie, an independent voice-over actor based in Los Angeles. Known for a deep, smooth, and soothing voice, Kojie specializes in commercial, narration, and animation projects, delivering professional and captivating performances." />
          <meta name="keywords" content="Kojie, voice-over actor, Los Angeles, voice talent, commercial voice-over, narration, animation voice-over, calming voice, professional voice actor, Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology" />
        </Helmet>
        <ThemeProvider theme={lightTheme}>
          <Navbar />
          <Router>
            <Landing path="/" />
          </Router>
          <Footer />
        </ThemeProvider>
      </HelmetProvider>
    </AuthContainer>
  );
};

export default App;
