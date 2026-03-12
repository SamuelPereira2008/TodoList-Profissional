import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.surface};
`;

export const TodoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 0.5rem;
  margin-top: 20px;
  background-color: ${theme.colors.background};
  box-shadow: ${theme.shadow.lg};
  border-radius: ${theme.radius.md};
  box-sizing: border-box;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const TodoList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;
