import "./App.css";
import Axios from "axios";
import { useState } from "react";

export default function App() {
  /*   const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res);
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);
 */
  const [name, setName] = useState("");
  const [personData, setpersonData] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setpersonData(res.data);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Person's Name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button className="btn" onClick={fetchData}>
        Predict Age
      </button>
      <div className="main_view">
        <p className="fact">Name: {personData?.name}</p>
        <p className="fact">Predicted Age: {personData?.age}</p>
        <p className="fact">Count: {personData?.count}</p>
      </div>
    </div>
  );
}
