import React from "react";
import "../App.css";

function App() {

  const [name, setName] = React.useState("");

  function setNameChange(event){
    setName(event.target.value);
  }

  return (
    <div className="container">
      <form className="form">
        <h1>Hello {name}</h1>
        <input type="text" placeholder="Name" onChange={setNameChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
