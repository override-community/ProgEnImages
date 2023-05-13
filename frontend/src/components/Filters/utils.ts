import { ImageCard } from "../../data/cardlist";

export function formatCategories(CARDLIST: ImageCard[]) {
  const uniqueCategories = [...new Set(CARDLIST.map((card) => card.category))];
  return uniqueCategories.sort();
}
