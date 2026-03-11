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
`;
