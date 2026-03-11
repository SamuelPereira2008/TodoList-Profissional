import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 70%;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  font-size: ${theme.fontSize.sm};
  border: ${theme.borderWidth.thin} solid ${theme.colors.secondary};
  border-radius: ${theme.radius.sm};
  box-sizing: border-box;
  background-color: ${theme.colors.background};
  &::placeholder {
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.normal};
    letter-spacing: 0.06rem;
  }
  &:focus {
    border-color: ${theme.colors.primaryHover};
    outline: none;
    color: ${theme.colors.text};
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.surface};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: ${theme.radius.sm};
  cursor: pointer;
  transition: ${theme.transition.normal};
  &:hover {
    background-color: ${theme.colors.primaryHover};
    transition: ${theme.transition.normal};
  }
`;

export const ButtonSmall = styled.button`
  padding: 0.4rem 0.9rem;
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.surface};
  background-color: ${theme.colors.primary};
  border: none;
  margin-left: 0.5rem;
  border-radius: ${theme.radius.sm};
  cursor: pointer;
  transition: ${theme.transition.normal};
  &:hover {
    background-color: ${theme.colors.primaryHover};
    transition: ${theme.transition.normal};
  }
`;
