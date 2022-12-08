import React, { useContext } from "react";
import styled from "styled-components";
import EditorContext from "../EditorContext";

const Container = styled.div`
  height: 100%;
  width: 50%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
  color: whitesmoke;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  resize: none;
  border: none;
  font-size: 17px;
  background: #1e1e1e;
  color: #dadada;
`;

export function MarkedInput(props) {
  const { setMarkdownText } = useContext(EditorContext);
  const onInputCahnge = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };
  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea onChange={onInputCahnge} />
    </Container>
  );
}
