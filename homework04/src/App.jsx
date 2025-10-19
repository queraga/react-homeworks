import { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import { citiesData } from "./components/citiesData";
import MathQuiz from "./components/MathQuiz";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const selectedCityData = citiesData.find(
    (city) => city.name === selectedCity
  );
  const onCitySelect = (cityName) => {
    setSelectedCity(cityName);
  };
  return (
    <>
      <CitySelector onCitySelect={onCitySelect} />
      <CityCard city={selectedCityData} />
      <MathQuiz />
    </>
  );
}

export default App;
