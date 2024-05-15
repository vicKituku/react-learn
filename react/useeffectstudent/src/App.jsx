import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [studentList, setStudentList] = useState([]);
  const api = "https://hp-api.onrender.com/api/characters/house/gryffindor";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setStudentList(data);
      })
      .catch((error) => {
        console.log("Error fetching the data: ", error);
      });
  }, [studentList]);

  return (
    <>
      <h2>Student List</h2>
      {studentList.map((student) => (
        <div key={student.id}>
          {console.log(student.name)}
          <h4>{student.name}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
