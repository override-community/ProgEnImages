import { useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { CARDLIST } from "../../data/cardlist";
import style from "./CardList.module.scss";
import { AppContext } from "../../context/AppContext";
import { filterByCategory, filterBySearchInput } from "./utils";

export function CardList() {
  const { selectedCategory, search } = useContext(AppContext);

  const filteredByCategorieCards = filterByCategory(CARDLIST, selectedCategory);
  const filteredByResearchInputCards = filterBySearchInput(
    filteredByCategorieCards,
    search
  );

  return (
    <section>
      <h2>Cartes</h2>
      <Row className={style.cardList}>
        {filteredByResearchInputCards.map((card) => (
          <Col key={card.id} xs={12} sm={6} lg={4}>
            <Card className={style.card}>
              <Card.Img variant='top' src={`/ProgEnImages/${card.src}`} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Publiée par: {card.author}{" "}
                </Card.Subtitle>
                <Card.Text>
                  Catégorie: <span className='fw-bold'>{card.category}</span>{" "}
                </Card.Text>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
