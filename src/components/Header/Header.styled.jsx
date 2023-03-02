import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: 500;

  transition: color, transform ${({ theme }) => theme.animation.default};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.black};
    transform: scale(1.1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.black};
  }
`;
