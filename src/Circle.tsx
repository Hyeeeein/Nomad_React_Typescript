import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "defalut text" }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
      text={text}
    />
  );
}

export default Circle;

// interface 예시
interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `hello ${playerObj.name}, you are ${playerObj.age} years old.`;

sayHello({ name: "jane", age: 40 });
// sayHello({ name: "error", age: 100, error: 'hi' }); => error 코드
