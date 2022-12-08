import "./styles.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markedinput";
import { Result } from "./components/result";
import { useState } from "react";
import EditorContext from "./EditorContext";
const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
  color: white;
`;
const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export default function App() {
  const [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}
