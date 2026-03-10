import { Container } from "../../../styles/Layout";
import { Header, Logo, Nav, StyledNavLink } from "./style";

export const NavBar = () => {
  return (
    <Container>
      <Header>
        <Logo>MyApp</Logo>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/todo">Todo</StyledNavLink>
        </Nav>
      </Header>
    </Container>
  );
};
