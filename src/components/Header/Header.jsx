import React from 'react';
import { HeaderNav, HeaderWrapper, HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <ul>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </li>
        </ul>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
