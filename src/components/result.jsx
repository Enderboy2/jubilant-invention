import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
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

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;
export function Result(props) {
  const { markdownText } = useContext(EditorContext);
  return (
    <Container>
      <Title>Results</Title>
      <ResultArea>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </ResultArea>
    </Container>
  );
}
