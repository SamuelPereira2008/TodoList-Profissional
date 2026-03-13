import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  /* Responsivo */
  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: ${theme.fontSize.xs};
  }

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
  box-shadow: ${theme.shadow.sm};

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: ${theme.colors.primaryHover};
    transition: ${theme.transition.normal};
    scale: 1.05;
  }
`;

export const ButtonSmall = styled.button`
  max-width: 80px;
  padding: 0.4rem 0.9rem;
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.surface};
  background-color: ${theme.colors.primary};
  border: none;
  margin-left: 0.5rem;
  border-radius: ${theme.radius.sm};
  cursor: pointer;
  transition: ${theme.transition.normal};
  box-shadow: ${theme.shadow.sm};

  @media (max-width: 480px) {
    max-width: 70px;
    padding: 0.3rem 0.6rem;
    font-size: ${theme.fontSize.xs};
  }

  &:hover {
    background-color: ${theme.colors.primaryHover};
    transition: ${theme.transition.normal};
    scale: 1.05;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const TodoItemList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radius.sm};
  box-shadow: ${theme.shadow.sm};
  box-sizing: border-box;

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0.75rem;
  }
`;

export const Text = styled.span<{ $complete?: boolean }>`
  width: 25%;
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.text};
  text-align: left;
  text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};
  opacity: ${(props) => (props.$complete ? "0.6" : "1")};
  transition: ${theme.transition.normal};

  @media (max-width: 768px) {
    width: 40%;
    font-size: ${theme.fontSize.sm};
  }

  @media (max-width: 480px) {
    width: 45%;
    font-size: ${theme.fontSize.sm};
  }

  @media (max-width: 375px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const Bold = styled.b<{ $complete?: boolean }>`
  width: 25%;
  font-size: ${theme.fontSize.md};
  color: ${(props) =>
    props.$complete ? theme.colors.success : theme.colors.warning};
  font-weight: ${theme.fontWeight.bold};

  @media (max-width: 768px) {
    width: 30%;
    font-size: ${theme.fontSize.sm};
  }

  @media (max-width: 480px) {
    width: 45%;
    font-size: ${theme.fontSize.xs};
  }
`;
