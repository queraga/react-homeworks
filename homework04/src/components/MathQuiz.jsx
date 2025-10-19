import { useState } from "react";
import Answer from "./Answer";
import "./MathQuiz.css";

function MathQuiz() {
  const [a, setA] = useState(generateNumber());
  const [b, setB] = useState(generateNumber());
  const [points, setPoints] = useState(0);

  function generateNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function updatePoints(userAnswer) {
    const correctAnswer = a + b;
    const parsedAnswer = parseInt(userAnswer);

    console.log("User answer: ", userAnswer);
    console.log("Parsed answer: ", parsedAnswer);
    console.log("Correct answer: ", correctAnswer);

    if (parsedAnswer === correctAnswer) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }
    setA(generateNumber());
    setB(generateNumber());
  }

  return (
    <div className="quizContainer">
      <h2>Your Points: {points}</h2>
      <p>
        {a} + {b} = ?
      </p>
      <Answer onSubmit={updatePoints} />
    </div>
  );
}

export default MathQuiz;
