import React from "react";
import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Link to="/">
                    <MainLogo src="assets/img/m_logo.svg" alt="m_logo"/>
                </Link>
            </div>
            <nav>
                <NavItem to="://blog.sombex.com" target="_blank">blog</NavItem>
                <NavItem activeClassName="active" to="/contact">contact</NavItem>
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

const NavItem = styled(Link)`
  margin-left: 2rem;

`

export default Header;