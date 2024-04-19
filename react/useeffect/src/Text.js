import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);
  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};
