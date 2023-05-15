import { createContext, useMemo, useState } from "react";

type AppContextType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const AppContext = createContext<AppContextType>({
  selectedCategory: "",
  setSelectedCategory: (_: string) => null,
  selectedSort: "",
  setSelectedSort: (_: string) => null,
  search: "",
  setSearch: (_: string) => null,
});

export function AppContextProvider({ children }: any) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [search, setSearch] = useState("");

  const initialValues = useMemo(
    () => ({
      selectedCategory,
      setSelectedCategory,
      selectedSort,
      setSelectedSort,
      search,
      setSearch,
    }),
    [selectedCategory, selectedSort, search]
  );

  return (
    <AppContext.Provider value={initialValues}>{children}</AppContext.Provider>
  );
}
