import { Container } from 'components/Container';
import { Outlet } from 'react-router-dom';
import { NavContainer, NavLinkStyled, NavList } from './Header.styled';
import { BiCameraMovie, BiHomeAlt } from 'react-icons/bi';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';

export const Header = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <NavList>
            <NavLinkStyled to="/">
              <BiHomeAlt size={20} />
              Home
            </NavLinkStyled>
            <NavLinkStyled to="movies">
              <BiCameraMovie size={20} />
              Movies
            </NavLinkStyled>
          </NavList>
        </Container>
      </NavContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
