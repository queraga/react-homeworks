import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggleSwitcher = () => {
    setLang((prev) => (prev === "en" ? "ua" : "en"));
  };
  const value = { lang, toggleSwitcher };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
