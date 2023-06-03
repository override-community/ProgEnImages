import { Container, Navbar } from "react-bootstrap";
import style from "./Header.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <Navbar bg='dark' variant='dark' className={style.nav}>
      <span className={style.reseau}> 
          <a href="https://discord.gg/pgEUk9xVKe" title="https://discord.gg/pgEUk9xVKe"> <img src="../../../discord.png" alt="discord"/> </a>
          <a href="https://medium.com/@overridecommunuty" title="https://medium.com/@overridecommunuty"> <img src="../../../medium.png" alt="medium"/> </a> 
          <a href="https://www.youtube.com/@Fab.16" title="https://www.youtube.com/@Fab.16"> <img src="../../../youtube.png" alt="youtube"/> </a> 
      </span> 
        <Container>
          <Navbar.Brand href='/'>Prog En Images</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
