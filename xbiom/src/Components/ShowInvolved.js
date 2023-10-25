import React from "react";
import {
  Container,
  ContainerFCol,
  MainContainer,
} from "../resources/css/MainStyle";
import { PCGrid, PCWebixGrid, ScrollableTabsButtonAuto } from "pcsharedlibrary";
import { gridData, columns } from "../resources/data/sampleGridDatas";

function ShowInvolved() {
  const dummyConfig = {
    id: "showInvolvedGridContainer",
    data: gridData,
    columns: columns,
    //columns: cols,
    width: 800,
    height: 800,
  };
const handleFilter=(data) =>{

  
}


  return (
    <MainContainer>
      <ContainerFCol>
        <Container>
          {/* <ScrollableTabsButtonAuto onFilter={handleFilter}/> */}
        <PCWebixGrid config={dummyConfig} />
        </Container>
        {/* <Container id={dummyConfig.id}>
          <PCGrid config={dummyConfig} />
        </Container> */}
      </ContainerFCol>
    </MainContainer>
  );
}

export default ShowInvolved;
