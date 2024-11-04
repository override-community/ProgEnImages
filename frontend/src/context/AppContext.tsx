import { createContext, useMemo, useState } from "react";

type SortValues = "A-Z" | "Z-A";

type AppContextType = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    selectedSort: SortValues; // Pour le tri
    setSelectedSort: (sort: SortValues) => void;
    search: string;
    setSearch: (search: string) => void;
};


export const AppContext = createContext<AppContextType>({
    selectedCategory: "",
    setSelectedCategory: (_: string) => null,
    selectedSort: "A-Z", // Valeur par défaut pour le tri
    setSelectedSort: (_: SortValues) => null,
    search: "",
    setSearch: (_: string) => null,
});

export function AppContextProvider({ children }: any) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSort, setSelectedSort] = useState<"A-Z" | "Z-A">("A-Z"); // Valeur par défaut
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
