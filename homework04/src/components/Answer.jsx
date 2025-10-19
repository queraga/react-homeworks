import { useState } from "react";

function Answer({ onSubmit }) {
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!answer) return;
    onSubmit(answer);
    setAnswer("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="your answer"
      />
      <button type="submit">Check</button>
    </form>
  );
}

export default Answer;
