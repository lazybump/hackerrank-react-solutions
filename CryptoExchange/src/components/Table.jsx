import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ amount, error }) {
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((currency) => (
            <tr key={currency.code}>
              <td>{currency.name}</td>
              <td>
                1 USD = {currency.rate} {currency.code}
              </td>
              {error ? (
                <td>n/a</td>
              ) : (
                <td>{(amount * currency.rate).toFixed(8)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
