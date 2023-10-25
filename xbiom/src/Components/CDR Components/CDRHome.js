import React, { useContext, useState } from "react";
import { SideBar, PcContext } from "pcsharedlibrary";
import { Container, ContainerFRow, MainContainer } from "../../resources/css/MainStyle";
import { cdrJsonData, sideJson } from "../../resources/data/jsonData";
import { ConCDRJsonToSidebarData } from "../../Controller/ConJsonToSidebarData";
import { cdrFilePath } from "../../resources/data/filePath";
import { useNavigate,useLocation} from "react-router-dom";
import CloseableTabs from 'react-closeable-tabs'
function CDRHome() {
  const [mdrHomeContext, setMdrHomeContext] = useContext(PcContext);
  const [currentRoot, setRoot] = useState("/cdr");
  const [activeIndex, setActiveIndex] = useState(0);

  const [tabsData, setTabsData] = useState([
    {
      tab: "All",
      component: <h2>sdfhgh</h2>,
      id: 0,
      tabIndex :0
    },
  ]);

  const convertedData = ConCDRJsonToSidebarData(cdrJsonData);
  const navigate = useNavigate();
  const location = useLocation();

  const customNav = (sideBarName) => {
    const rootName = sideBarName.replace(/\s/g, "").toLowerCase();

    navigate(`${cdrFilePath.cdrBaseUrl}${rootName}`);
    debugger;
    console.log(location.pathname); // Here, location is not defined
    setRoot(`${cdrFilePath.cdrBaseUrl}${rootName}`)
  };

  return (
    <MainContainer>
      <ContainerFRow>
        <SideBar items={convertedData} onItemClick={customNav} />
        <CloseableTabs
          tabPanelColor="lightgray"
          data={tabsData}
          activeIndex={activeIndex}
          // onTabClick={handleTabClick} 
          // onCloseTab ={handleTabClose} 
        />
      </ContainerFRow>
        {(currentRoot === "/cdr" || currentRoot === "/cdr/all") && (
          <Container margin="0 0 0 10px" bRadius="15px" bgc="white">
            <h2>All Container</h2>
          </Container>
        )}
        {(currentRoot === "/cdr/send") && (
          <Container margin="0 0 0 10px" bRadius="15px" bgc="white">
            <h2>Send Container</h2>
          </Container>
        )}
        {(currentRoot === "/cdr/custom") && (
          <Container margin="0 0 0 10px" bRadius="15px" bgc="white">
            <h2>Custom container</h2>
          </Container>
        )}
      
    </MainContainer>
  );
}
export default CDRHome;
