import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./comonents/Header";
import Hero from "./comonents/Hero";
import Bars from "./comonents/Bars";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from "./comonents/Contact";

function App() {
    return (
        <Router>
            <div className="App">
                <StyledContainer>
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            <Hero/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                    <Bars/>
                </StyledContainer>
            </div>
        </Router>
    );
}

const StyledContainer = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export default App;
