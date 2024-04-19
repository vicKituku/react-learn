import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
// import { Text } from "./Text";

function App() {
  // const [showText, setShowText] = useState(false);
  // const [catFact, setCatFact] = useState("");
  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // };
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get("https://api.agify.io/?name=" + name).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button> */}
      {/* {showText && <Text />} */}

      {/* <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p> */}
      <input
        placeholder="Ex. Victor.."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>name: {predictedAge?.name}</h1>
      <h1>Age: {predictedAge?.age}</h1>
      <h1>count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
