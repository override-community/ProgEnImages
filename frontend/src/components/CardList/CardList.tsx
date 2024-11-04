import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { CARDLIST } from "../../data/cardlist";
import style from "./CardList.module.scss";
import { AppContext } from "../../context/AppContext";
import { filterByCategory, filterBySearchInput } from "./utils";
import { ImageCard } from "../../ui/ImageCard/";

export function CardList() {
    const { selectedCategory, search, selectedSort } = useContext(AppContext); // Récupérer selectedSort

    const filteredByCategorieCards = filterByCategory(CARDLIST, selectedCategory);
    const filteredByResearchInputCards = filterBySearchInput(filteredByCategorieCards, search);

    // Tri des cartes selon la méthode de tri sélectionnée
    const sortedCards = [...filteredByResearchInputCards]; // Créez une copie pour trier

    if (selectedSort === 'A-Z') {
        sortedCards.sort((a, b) => a.name.localeCompare(b.name)); // Tri A-Z
    } else if (selectedSort === 'Z-A') {
        sortedCards.sort((a, b) => b.name.localeCompare(a.name)); // Tri Z-A
    }

    return (
        <section>
            <h2>Cartes</h2>
            <Row className={style.cardList}>
                {sortedCards.map((card) => (
                    <Col key={card.id} xs={12} sm={6} lg={4}>
                        <ImageCard card={card} />
                    </Col>
                ))}
            </Row>
        </section>
    );
}
