import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../models";

export const HelloWorld = observer(() => {
  const { countStore } = useStores();
  const { count } = countStore;
  const increment = () => countStore.increment();
  const decrement = () => countStore.decrement();
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p color="white">{`Count: ${count}`}</p>
        <button className="side-by-side" type="button" onClick={increment}>
          Increment
        </button>
        <button className="side-by-side" type="button" onClick={decrement}>
          Decrement
        </button>
      </header>
    </div>
  );
});
