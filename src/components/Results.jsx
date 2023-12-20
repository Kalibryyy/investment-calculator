export default function Results(annualData) {
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
          {/* {annualData.map((data, dataIndex) => (
            <tr key={dataIndex}>
              <td>{data.valueEndOfYear}</td>
              <td>{data.interest}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{data.annualInvestment}</td>
            </tr>
          ))} */}
      </tbody>
    </table>
  );
}
