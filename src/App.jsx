import { useState } from "react";
import "./App.css";
import Router from "./shared/Router";
import styled from "styled-components";

const StAcon = styled.div`
  width: 100%;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <StAcon>
      <Router />
    </StAcon>
  );
}

export default App;
