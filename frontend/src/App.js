import React from "react";
import { Router } from "@reach/router";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./contexts/theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./hooks/landing";
import AddStory from "./hooks/addstory";
import Login from "./hooks/login";
import Register from './hooks/register';
 
import { AuthContainer } from "./contexts/auth";

import "./styles/index.css";

const App = () => {

  return (
    <AuthContainer isGlobal>
      <HelmetProvider>
        <Helmet>
          <title>Twelve : Welcome</title>
          <link rel="canonical" href="http://www.twelve.community" />
          <meta name="description" content="Twelve is a spiritual, community-based platform focused on anonymity, recovery, purpose, and connection through modern technology." />
          <meta name="keywords" content="Twelve, recovery, spiritual, community, anonymity, connection, purpose, meetings, modern technology" />
        </Helmet>
        <ThemeProvider theme={lightTheme}>
          <Navbar />
          <Router>
            <Landing path="/" />
            <Login path="/login" />
            <Register path="/register" />
            <AddStory path="/addstory" />
       
          </Router>
          <Footer />
        </ThemeProvider>
      </HelmetProvider>
    </AuthContainer>
  );
};

export default App;
