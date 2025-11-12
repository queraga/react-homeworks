import "./App.css";
import LanguageProvider from "./components/languageProvider";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextDisplay from "./components/TextDisplay";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
