import { useContext } from "react";
import { CARDLIST } from "../../data/cardlist";
import style from "./CardList.module.scss";
import { AppContext } from "../../context/AppContext";
import {filterByCategory, filterBySearchInput, sortCards} from "./utils";
import { ImageCard } from "../../ui/ImageCard/";


export function CardList() {
    const { selectedCategory, search, selectedSort } = useContext(AppContext); // Récupérer selectedSort

    const filteredByCategorieCards = filterByCategory(CARDLIST, selectedCategory);
    const filteredByResearchInputCards = filterBySearchInput(filteredByCategorieCards, search);
    const sortedCards = sortCards(filteredByResearchInputCards, selectedSort);

    return (
        <section>
            <h2>Cartes</h2>
            <ul className={style.cardList}>
                {sortedCards.map((card) => (
                    <li key={card.id}>
                        <ImageCard card={card} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
