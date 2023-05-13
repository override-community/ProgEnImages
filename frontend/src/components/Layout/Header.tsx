import { Container, Navbar } from "react-bootstrap";
import style from "./Header.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <Navbar bg='dark' variant='dark' className={style.nav}>
        <Container>
          <Navbar.Brand href='/'>Prog En Images</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
