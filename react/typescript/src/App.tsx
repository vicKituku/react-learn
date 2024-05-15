import React from "react";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Person
        name="Victor"
        email="vic@vickituku.dev"
        age={21}
        isMarried={true}
        friends={["jake", "jess", "jerry"]}
      />
    </div>
  );
}

export default App;
