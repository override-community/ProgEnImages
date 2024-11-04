import { createContext, useMemo, useState } from "react";

type AppContextType = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    selectedSort: string; // Pour le tri
    setSelectedSort: (sort: string) => void;
    search: string;
    setSearch: (search: string) => void;
};

export const AppContext = createContext<AppContextType>({
    selectedCategory: "",
    setSelectedCategory: (_: string) => null,
    selectedSort: "A-Z", // Valeur par défaut pour le tri
    setSelectedSort: (_: string) => null,
    search: "",
    setSearch: (_: string) => null,
});

export function AppContextProvider({ children }: any) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSort, setSelectedSort] = useState("A-Z"); // Valeur par défaut
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
