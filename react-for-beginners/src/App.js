import { useState, useEffect } from "react";

function App() {
  const [loading, setloading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
    console.log(event.target.value);
  };
  const onChange = (event) => setValue(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setloading(false);
  }, []);

  return (
    <div>
      <h1>The coins! {coins.length} </h1>
      {loading ? <strong>Loading...</strong> : null}
      <select value={index} onChange={onSelect}>
        {coins.map((coin) => (
          <option value={coin.name} key={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
      {coins.map((coin) =>
        coin?.name === index ? (
          <h1>
            {coin.symbol} : {coin.quotes.USD.price} USD
            <div>
              <input value={value} onChange={onChange} />
              <input
                value={value / coin.quotes.USD.price}
                onChange={onChange}
              />
              <span>{coin.name}</span>
            </div>
          </h1>
        ) : null
      )}
    </div>
  );
}

export default App;
