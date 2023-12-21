export default function UserInput({ userInput, onUserInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            required
            type="number"
            onChange={onUserInputChange}
            name="initialInvestment"
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            required
            type="number"
            onChange={onUserInputChange}
            name="annualInvestment"
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            required
            type="number"
            name="expectedReturn"
            onChange={onUserInputChange}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            required
            type="number"
            name="duration"
            onChange={onUserInputChange}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
