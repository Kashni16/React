import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function Change(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={Change}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={Change}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
