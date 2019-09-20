import React from "react";
import styled from "styled-components";
import generateWorld from "../../builder";

const Tile = styled.div`
  width: 25px;
  border: 1px solid black;
`;

const Row = styled.div`
  display: flex;
`;

const App = () => {
  const chunkTest = generateWorld(5);
  console.log(chunkTest);
  return chunkTest.map(r => {
    return (
      <Row>
        {r.map((t, i) => {
          return <Tile>{t}</Tile>;
        })}
      </Row>
    );
  });
};

export default App;
