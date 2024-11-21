import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const [mostVoted, setMostVoted] = useState("");
  const findLargest = (votesCopy) => {
    const largest = Object.entries(votesCopy).sort(([, a], [, b]) => b - a)[0];
    setMostVoted(anecdotes[largest[0]]);
    setMostVoted(largest);
  };
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handleVoteClick = (selected) => {
    const votesCopy = { ...votes };
    votesCopy[selected] += 1;
    setVotes(votesCopy);
    findLargest(votesCopy);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day:</h1>
      </div>
      <div>
        {anecdotes[selected]}
        <p>Has {votes[selected]} Votes.</p>
        <div className="buttonGroup">
          <button
            className="voteButton"
            onClick={() => handleVoteClick(selected)}
          >
            Vote
          </button>
          <button className="anecdoteButton" onClick={handleClick}>
            Random Anecdote
          </button>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes:</h1>
      </div>
      <div>
        {anecdotes[mostVoted[0]]}
        {/* <p>Has {mostVoted[1] ? "" : 0} votes.</p> */}
        <p>
          {mostVoted[1]
            ? `Has ${mostVoted[1]} votes `
            : "No Votes have been cast yet."}
        </p>
      </div>
    </div>
  );
};

export default App;
