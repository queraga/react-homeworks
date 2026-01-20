import { useSelector } from "react-redux";

function Result() {
  const { submitted, result } = useSelector((state) => state.questionnaire);

  if (!submitted) return null;

  return (
    <div>
      <h3>Result</h3>
      <p>{result}</p>
    </div>
  );
}

export default Result;
