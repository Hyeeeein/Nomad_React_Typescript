import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Form from "./Form";
import ThemeEx from "./ThemeEx";

function App() {
  return (
    <div>
      <Circle bgColor="tomato" borderColor="black" text="new text" />
      <Circle bgColor="teal" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ThemeEx />
    </div>
  );
}

export default App;
