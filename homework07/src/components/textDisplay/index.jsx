import { useContext } from "react";
import { LanguageContext } from "../languageProvider";

function TextDisplay() {
  const { lang } = useContext(LanguageContext);
  return (
    <h1>
      {lang === "en"
        ? "English language was chosen"
        : "Було обрано українську мову"}
    </h1>
  );
}

export default TextDisplay;
