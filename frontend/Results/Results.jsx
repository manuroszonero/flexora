import { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";

function Results() {
  const { result } = useContext(ResultContext);

  if (!result) {
    return (
      <div>
        <h1>Flexora</h1>

        <h2>No Assessment Result Found</h2>

        <p>Please complete the assessment first.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Flexora Results</h1>

      <hr />

      <h2>Risk Level</h2>

      <h1>{result.risk_level}</h1>

      <hr />

      <h2>Confidence</h2>

      <h1>{result.confidence}%</h1>

      <hr />

      <h2>Recommendations</h2>

      <ul>
        {result.recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>

      <hr />

      <h2>Prediction Probabilities</h2>

      <ul>
        {Object.entries(result.probabilities).map(([level, value]) => (
          <li key={level}>
            <strong>{level}</strong>: {value}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;