import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { CARDLIST } from "../../data/cardlist";
import style from "./CardList.module.scss";
import { AppContext } from "../../context/AppContext";
import {filterByCategory, filterBySearchInput, sortCards} from "./utils";
import { ImageCard } from "../../ui/ImageCard/";



export function CardList() {
    const { selectedCategory, search, selectedSort } = useContext(AppContext); // Récupérer selectedSort

    const filteredByCategorieCards = filterByCategory(CARDLIST, selectedCategory);
    const filteredByResearchInputCards = filterBySearchInput(filteredByCategorieCards, search);
    const sortedCardsByName = sortCards(filteredByResearchInputCards, selectedSort);

    return (
        <section>
            <h2>Cartes</h2>
            <Row className={style.cardList}>
                {sortedCardsByName.map((card) => (
                    <Col key={card.id} xs={12} sm={6} lg={4}>
                        <ImageCard card={card} />
                    </Col>
                ))}
            </Row>
        </section>
    );
}
