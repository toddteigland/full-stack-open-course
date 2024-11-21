import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  if (props.votes === 0) {
    return (
      <div>
        <p>No feedback given yet. . . </p>
      </div>
    );
  }
  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="Total Votes" value={props.votes} />
      <StatisticLine text="Average Score" value={props.average.toFixed(3)} />
      <StatisticLine
        text="Positive"
        value={(props.positive * 100).toFixed(2)}
      />
    </>
  );
};
export default Statistics;
