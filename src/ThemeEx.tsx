import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  padding: 100px;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <p>{text}</p>;
}

const ThemeEx = () => {
  // from 이 있는 경우
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};

  // from 이 없 경우
  const onClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <Container>
      <H1>ThemeEx</H1>
      <Dummy active text="hello" />
      <button onClick={onClick}></button>
    </Container>
  );
};

export default ThemeEx;
