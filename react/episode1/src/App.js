import "./App.css";
// import User from "./User";
import { useState } from "react";

function App() {
  // const age = 19;
  // const isGreen = false;
  // const users = [
  //   { name: "pedro", age: 21 },
  //   { name: "vic", age: 23 },
  //   { name: "jake", age: 6 },
  // ];

  // const planets = [
  //   { name: "Mars", isGasPlanet: false },
  //   { name: "Earth", isGasPlanet: false },
  //   { name: "Jupiter", isGasPlanet: true },
  //   { name: "Venus", isGasPlanet: false },
  //   { name: "Neptune", isGasPlanet: true },
  //   { name: "Uranus", isGasPlanet: true },
  // ];

  // const [age, setAge] = useState(1);
  // const increaseAge = () => {
  //   setAge(age + 1);
  // };

  // const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  const [textColor, setTextColor] = useState("red");
  // const [showText, setShowText] = useState(true);
  // const toggleText = () => {
  //   setShowText(!showText);
  // };
  return (
    <div className="App">
      {/* <Employee salary={60000} position="Senior SDE" company="Amazon" />
        <Employee salary={120000} position="Junior SDE" company="Google" />
        <Employee salary={10000} position="Project Manager" company="Netflix" /> */}
      {/* {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDERAGE</h1>}
      <h1 style={{color: isGreen ? "green": "red" }}>THIS HAS COLOR</h1>
      {isGreen && <button>This is a button</button>} */}
      {/* {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })} */}
      {/* {planets.map(
        (planet, key) => !planet.isGasPlanet && <Planet name={planet.name} />
      )} */}

      {/* <h1>{age}</h1>
      <button onClick={increaseAge}>Increase Button</button> */}
      {/* <input type="text" onChange={handleInputChange} />
      <p>{inputValue}</p> */}
      <button
        onClick={() => {
          setTextColor(textColor === "red" ? "black" : "red");
        }}
      >
        show/hide
      </button>
      {<h1 style={{ color: textColor }}>HI, MY NAME IS VICTOR</h1>}
    </div>
  );
}
// const Planet = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );
// };

// const GetName = () => {
//   return "Victor";
// };
// const GetNameComponent = () => {
//   return <h1>"Victor</h1>;
// };

// const Employee = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };

// const age = 18;
// age >= 18 ? console.log("Old enough") : console.log("young");
export default App;
