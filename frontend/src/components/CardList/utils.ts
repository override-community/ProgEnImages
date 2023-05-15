import { TImageCard } from "../../types";

export function filterByCategory(cards: TImageCard[], category: string) {
  return category === ""
    ? cards
    : cards.filter((card) => card.category === category);
}

export function filterBySearchInput(cards: TImageCard[], searchInput: string) {
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
