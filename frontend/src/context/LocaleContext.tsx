import { createContext } from "react";
import { useState } from "react";

export type Locale = "fr" | "en";

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: (_: string) => null,
});

export function LocaleProivder({ children }: React.PropsWithChildren) {
  const [locale, setLocale] = useState("en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
