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
                        <Route>
                            <NotFound/>
                        </Route>
                    </Switch>
                    <Bars/>
                </StyledContainer>
            </div>
        </Router>
    );
}

const NotFound = () => {
    return (
        <Lost>
            <div>
                <p>404</p>
                <h1> Not found :( </h1>
            </div>
        </Lost>
    )
}

const StyledContainer = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const Lost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;
  text-align: center;
`

export default App;
