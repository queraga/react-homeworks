function CityCard({ city }) {
  if (!city) {
    return <p>Please select the city</p>;
  }
  return (
    <div>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} style={{ width: "600px" }} alt="" />
      <p>{city.description}</p>

      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
