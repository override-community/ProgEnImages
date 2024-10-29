import { useContext } from 'react';
import { CARDLIST } from '../../data/cardlist';
import style from './CardList.module.scss';
import { AppContext } from '../../context/AppContext';
import { filterByCategory, filterBySearchInput } from './utils';
import { ImageCard } from '../../ui/ImageCard/';

export function CardList() {
  const { selectedCategory, search } = useContext(AppContext);

  const filteredByCategorieCards = filterByCategory(CARDLIST, selectedCategory);
  const filteredByResearchInputCards = filterBySearchInput(filteredByCategorieCards, search);

  return (
    <section>
      <h2>Cartes</h2>
      <ul className={style.cardList}>
        {filteredByResearchInputCards.map((card) => (
          <li key={card.id}>
            <ImageCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}
