import React, { Fragment } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

`;

const LeftContainer = styled.div`
   padding: 10px;
    
`;

const RightContainer = styled.div`
   padding: 10px;
`;

const Book = (props) => {
  return (
    <Fragment>
      <MainContainer>
        <LeftContainer>
            <img src={props.image} height="200px" />
        </LeftContainer>
        <RightContainer>
            <h2 className="text-left">{props.title}</h2>
            <h4 className="text-left">{props.subtitle}</h4>
        </RightContainer>
      </MainContainer>
    </Fragment>
  );
};

export default Book;
