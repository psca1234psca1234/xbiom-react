import React, { useEffect } from "react";
import {
  Container,
  ContainerFCol,
  MainContainer,
} from "../resources/css/MainStyle";
import { PCGrid } from "pcsharedlibrary";
import { PCWebixGrid } from "pcsharedlibrary";
import { gridData, columns } from "../resources/data/sampleGridDatas";

function MyWorkSpace() {
  const dummyConfig = {
    id: "webixContainer",
    data: gridData,
    columns: columns,
    //columns: cols,
    width: 800,
    height: 800,
  };

  return (
    <MainContainer>
      {/* <PCWebixGrid config={dummyConfig}/> */}
      <Container cntname={"ws"}>
        <PCWebixGrid config={dummyConfig} />
      </Container>
      {/* <ContainerFCol className="myWorkspceCont">
        <Container cntname={'ws'} className="myWrokspaceGridContainer" id="webixContainer">
          <Container className="myWorkSpaceGridCon">
            <PCGrid config={dummyConfig} />
          </Container>
        </Container>
      </ContainerFCol> */}
    </MainContainer>
  );
}

export default MyWorkSpace;
