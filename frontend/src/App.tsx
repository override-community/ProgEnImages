import { Container } from "react-bootstrap";
import { CardList } from "./components/CardList/CardList";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Filters />
        <CardList />
      </Container>
    </>
  );
}

export default App;
