import { useState, useEffect } from "react";

import styles from "./App.module.css";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => console.log("i run only once"), []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes and more than 5 word");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'button' was clicked");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>continue</button>
    </div>
  );
}

export default App;
