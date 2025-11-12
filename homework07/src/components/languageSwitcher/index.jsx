import { useContext } from "react";
import { LanguageContext } from "../languageProvider";

function LanguageSwitcher() {
  const { toggleSwitcher } = useContext(LanguageContext);
  return (
    <button className="btnSwitch" onClick={toggleSwitcher}>
      Switch Language
    </button>
  );
}

export default LanguageSwitcher;
