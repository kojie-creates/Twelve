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

const CardWrapper = styled.div`
  margin: 5px;
`;

const Personas = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Twelve : Personas</title>
        <link rel="canonical" href="http://www.twelve.community/personas" />
        <meta
          name="keywords"
          content="Spiritual,based,social,platform,Anonymity, designing principle,Recovery, purpose,Connection , modern technology"
        />
      </Helmet>
      <Container>

      </Container>
 
    </Wrapper>
  );
};

export default Personas;
