import { Container } from 'components/Container';
import { NavContainer, NavList } from './Header.styled';

const Header = () => {
  return (
    <NavContainer>
      <Container>
        <NavList>
          <li>Home</li>
          <li>Movies</li>
        </NavList>
      </Container>
    </NavContainer>
  );
};

export default Header;
