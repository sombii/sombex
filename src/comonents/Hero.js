import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <HeroWrapper>
            <Type>
                <H1> We Build Things That Looks Good & Are Easy To Use. </H1>
                <Para>New to market but full of positivity and creative attitude. We design and develop web apps with
                    passion and for fun.
                </Para>
                <CtaBtn to="/contact">CONTACT</CtaBtn>
                <SecBtn href="/contact">BLOG<OutIcon src="assets/img/out.svg"/> </SecBtn>
            </Type>
            <HeroImg src="assets/img/hero.svg"/>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    text-align: center;
    
    img{
      margin: 0;
    }
  }
`

const Type = styled.div`
  margin-right: 1.5rem;
  
  @media (max-width: 850px) {
    margin-right: 0;
    h1 {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const H1 = styled.h1`
  color: white;
  font-size: 2.8rem;
  line-height: 2.7rem;
  letter-spacing: -2px;
  font-weight: bold;
`;

const Para = styled.p`
  font-size: 1.25rem;
  line-height: 1.6rem;
  letter-spacing: -1px;
  margin-bottom: 2.5rem;
`

const HeroImg = styled.img`
  max-width: 25rem;
  margin-left: 1.5rem;
`

const CtaBtn = styled(Link)`
  padding: 0.7rem 1rem;
  background-color: #2de3c5;
  color: #2d3331 !important;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 1rem;
`
const SecBtn = styled.a`
  padding: 0.7rem 1rem;
  background-color: #fff;
  color: #2d3331 !important;
  font-weight: bold;
  vertical-align: middle;
`

const OutIcon = styled.img`
  margin-left: 0.4rem;
  width: 0.9rem;
`

export default Hero;