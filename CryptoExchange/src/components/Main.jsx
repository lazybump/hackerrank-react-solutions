import { useState } from "react";
import Table from "./Table";

export const balance = 17042.67;

function Main() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setAmount(value);
    if (value === "") {
      setError("Amount cannot be empty");
    } else if (value < 0.01) {
      setError("Amount cannot be less than $0.01");
    } else if (value > balance) {
      setError("Amount cannot exceed the available balance");
    } else {
      setError("");
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              min={0}
              step={0.01}
              value={amount}
              onChange={handleChange}
            />{" "}
            of my $<span>{balance}</span>:
          </label>
          {error && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {error}
            </p>
          )}
        </div>
      </section>
      <Table amount={amount} error={error} />
    </div>
  );
}

export default Main;
