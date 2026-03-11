import { Container } from "../../../styles/Layout";
import { NavBar } from "../header/NavBar";

interface IPageLayout {
  title: string;
  children: React.ReactNode;
}
export const PageLayout = ({ children, title }: IPageLayout) => {
  return (
    <Container>
      <NavBar />
      <title>{title}</title>
      <div>{children}</div>
    </Container>
  );
};
