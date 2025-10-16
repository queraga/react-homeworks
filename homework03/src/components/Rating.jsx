import { useState } from "react";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);
  const ratingList = [
    "https://www.bmw-offenbach.de/export/shared/NLV-Images/NLV-Mitte/ueber-uns/offenbach/ueber-uns/classic-und-m-kompetenzzentrum/bmw-m-kraft-trifft-auf-dynamik-02.jpg_1556467826.jpg",

    "https://www.bmw-offenbach.de/export/shared/NLV-Images/NLV-Mitte/ueber-uns/offenbach/ueber-uns/classic-und-m-kompetenzzentrum/bmw-m-kraft-trifft-auf-dynamik-05.jpg_1556467826.jpg",

    "https://www.rolfhorn.de/files/images/service/bmw_classic_hero.jpg",

    "https://hagerty.co.uk/wp-content/uploads/2022/11/BMW-Batmobile-scaled.jpg",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <img
        src={ratingList[ratingValue]}
        alt="Rating"
        style={{ height: "250px", justifyContent: "center" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => setRatingValue(0)}
          style={{
            padding: "12px 6px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            backgroundColor: "#F08080",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Bad
        </button>
        <button
          onClick={() => setRatingValue(1)}
          style={{
            padding: "12px 6px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            backgroundColor: "#FFA500",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Not bad
        </button>
        <button
          onClick={() => setRatingValue(2)}
          style={{
            padding: "12px 6px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            backgroundColor: "#8FBC8F",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Good
        </button>
        <button
          onClick={() => setRatingValue(3)}
          style={{
            padding: "12px 6px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            backgroundColor: "#3CB371",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Outstanding
        </button>
      </div>
    </div>
  );
}

export default Rating;
