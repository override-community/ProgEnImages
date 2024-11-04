import { TImageCard } from '../../types';

export function filterByCategory(cards: TImageCard[], category: string) {
  return category === '' ? cards : cards.filter((card) => card.category === category);
}

export function filterBySearchInput(cards: TImageCard[], searchInput: string) {
  const inputValue = searchInput.trim().toLowerCase();

  return inputValue === ''
    ? cards
    : cards.filter(
        (card) =>
          card.name.toLowerCase().includes(inputValue) ||
          card.description.toLowerCase().includes(inputValue) ||
          card.author.toLowerCase().includes(inputValue)
      );
}

export function sortCards(filteredCards: TImageCard[], sortOrder: 'A-Z' | 'Z-A') {
  if (sortOrder === 'Z-A') {
    return filteredCards.toSorted((a, b) => b.name.localeCompare(a.name));
  }

  return filteredCards.toSorted((a, b) => a.name.localeCompare(b.name));
}
