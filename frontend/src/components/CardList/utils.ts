import { ImageCard } from "../../data/cardlist";

export function filterByCategory(cards: ImageCard[], category: string) {
  return category === ""
    ? cards
    : cards.filter((card) => card.category === category);
}

export function filterBySearchInput(cards: ImageCard[], searchInput: string) {
  const inputValue = searchInput.trim().toLowerCase();

  return inputValue === ""
    ? cards
    : cards.filter(
        (card) =>
          card.name.toLowerCase().includes(inputValue) ||
          card.description.toLowerCase().includes(inputValue) ||
          card.author.toLowerCase().includes(inputValue)
      );
}
