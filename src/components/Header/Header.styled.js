import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: -1px 5px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 100px;
  ul {
    display: flex;
    gap: 40px;
  }
`;
export const HeaderLink = styled(NavLink)`
  font-size: 25px;
  transition: color 300ms ease-in-out;
  &.active {
    color: red;
  }

  &:hover {
    color: red;
  }
`;
