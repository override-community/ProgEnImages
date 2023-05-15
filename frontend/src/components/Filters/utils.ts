import { TImageCard } from "../../types";

export function formatCategories(CARDLIST: TImageCard[]) {
  const uniqueCategories = [...new Set(CARDLIST.map((card) => card.category))];
  return uniqueCategories.sort();
}
