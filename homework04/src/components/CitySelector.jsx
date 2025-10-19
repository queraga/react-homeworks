function CitySelector({ onCitySelect }) {
  const handleChange = (e) => {
    onCitySelect(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a City</option>
      <option value="Tokyo">Tokyo</option>
      <option value="Kyoto">Kyoto</option>
      <option value="Osaka">Osaka</option>
      <option value="Hokkaido">Hokkaido</option>
      <option value="Nagoya">Nagoya</option>
    </select>
  );
}

export default CitySelector;
