import { useState } from "react";
import Statistics from "./Statistics";

const Button = (props) => (
  <button onClick={props.onClick} style={props.style}>
    {props.text}
  </button>
);
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [votes, setVotes] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedVotes = votes + 1;
    setVotes(updatedVotes);
    const updatedAverage = (updatedGood - bad) / updatedVotes;
    setAverage(updatedAverage);
    const updatedPositive = updatedGood / updatedVotes;
    setPositive(updatedPositive);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    const updatedVotes = votes + 1;
    setVotes(updatedVotes);
    const updatedPositive = good / updatedVotes;
    setPositive(updatedPositive);
  };
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedVotes = votes + 1;
    setVotes(updatedVotes);
    const updatedAverage = (good - updatedBad) / updatedVotes;
    setAverage(updatedAverage);
    const updatedPositive = good / updatedVotes;
    setPositive(updatedPositive);
  };

  return (
    <div>
      <h1>Cafe Feedback</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          votes={votes}
          average={average}
          positive={positive}
        />
      </div>
    </div>
  );
};

export default App;
