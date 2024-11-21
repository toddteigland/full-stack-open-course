const StatisticLine = (props) => {
  const isPercentage =
    props.text === "Positive" || props.text === "Average Score";

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "120px" }}>{props.text}:</td>
            <td>
              {props.value}
              {isPercentage ? "%" : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticLine;
