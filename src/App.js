import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./comonents/Header";
import Hero from "./comonents/Hero";
import Bars from "./comonents/Bars";

function App() {
    return (
        <div className="App">
            <StyledContainer>
                <Header/>
                <Hero/>
                <Bars/>
            </StyledContainer>

        </div>
    );
}

const StyledContainer = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export default App;
