import React from "react";
import Form from "./Form";
import "../App.css";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form user={userIsRegistered}/>
    </div>
  );
}

export default App;
