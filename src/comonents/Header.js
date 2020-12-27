import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <a href="/">
                    <MainLogo src="assets/img/m_logo.svg" alt="m_logo"/>
                </a>
            </div>
            <nav>
                <NavItem href="://blog.sombex.com" target="_blank">blog</NavItem>
                <NavItem href="/contact">contact</NavItem>
            </nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  font-weight: bold;
`

const MainLogo = styled.img`
  width: 7rem;
`

const NavItem = styled.a`
  margin-left: 2rem;

`

export default Header;