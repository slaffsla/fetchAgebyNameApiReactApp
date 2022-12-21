import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button style={{ width: "131px" }} onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>Decrease</button>
      <br></br>
      <button onClick={setToZero}>Set to Zero</button>

      {count}
    </div>
  );
}
export default App;
/*
export default function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h3>{planet.name}</h3>
      )}
    </div>
  );
}

 function App() {
  const users = [
    { name: "slasla", age: 43 },
    { name: "Katya", age: 22 },
    { name: "Valerka", age: 33 },
  ];
  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      Name: {props.name}, Age: {props.age}
    </div>
  );
};
export default App; */
