import "./App.css";
import styled from "styled-components";
import { HeaderContainer, BodyContainer } from "./container";

function App() {
  return (
    <div className="App">
      <Positioner>
        <Wrapper>
          <HeaderContainer />
          <BodyContainer />
        </Wrapper>
      </Positioner>
    </div>
  );
}

export default App;

const Positioner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 920px;
  height: 875px;
  background-color: red;
`;
