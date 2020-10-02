import React from 'react';
import { Router } from '@reach/router';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './hooks/home';
import Stories from './hooks/stories';

import { AuthContainer } from './contexts/auth';

const App = () => {

  return (
    <AuthContainer isGlobal>
      <Navbar />
      <Router>
        <Home path="/" />
        <Stories path="stories" />
      </Router>
      <Footer />
    </AuthContainer>

  );
}

export default App;
