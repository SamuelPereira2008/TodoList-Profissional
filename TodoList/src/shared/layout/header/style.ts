import styled from "styled-components";
import { NavLink } from "react-router";
import { theme } from "../../../styles/theme";

export const Header = styled.header`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  width: 100%;
  box-shadow: ${theme.shadow.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.surface};
`;

export const Nav = styled.nav`
  width: 50%;
  max-width: ${theme.layout.containerWidth};
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.surface};
  text-decoration: none;
  margin-left: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  border-radius: ${theme.radius.sm};
  transition: background-color ${theme.transition.normal};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }

  &.active {
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.text};
  }
`;
