import MainComponent from "./components/MainComponent";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
}

export default App;
