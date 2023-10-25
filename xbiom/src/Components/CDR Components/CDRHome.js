import React, { useContext, useState } from "react";
import { SideBar, PcContext } from "pcsharedlibrary";
import { Container, ContainerFRow, MainContainer } from "../../resources/css/MainStyle";
import { cdrJsonData, sideJson } from "../../resources/data/jsonData";
import { ConCDRJsonToSidebarData } from "../../Controller/ConJsonToSidebarData";
import { cdrFilePath } from "../../resources/data/filePath";
import { useNavigate,useLocation} from "react-router-dom";
import CloseableTabs from 'react-closeable-tabs'
import All from "./All";
import cdrGenerateTabDataForSubItem from "../../Controller/CDRtabController";


function CDRHome() {
  const [mdrHomeContext, setMdrHomeContext] = useContext(PcContext);
  const [currentRoot, setRoot] = useState("/cdr");
  const [activeIndex, setActiveIndex] = useState(0);

  const [tabsData, setTabsData] = useState([
    {
      tab: "All",
      component: <All />,
      id: 0,
      tabIndex: 0,
    },
  ]);

  const convertedData = ConCDRJsonToSidebarData(cdrJsonData);
  const navigate = useNavigate();
  const location = useLocation();

  const customNav = (sideBarName) => {
    const rootName = sideBarName.replace(/\s/g, "").toLowerCase();
    
    const newTabsData = cdrGenerateTabDataForSubItem(rootName);

    navigate(`${cdrFilePath.cdrBaseUrl}${rootName}`);
    ;
    console.log(location.pathname); // Here, location is not defined
    setRoot(`${cdrFilePath.cdrBaseUrl}${rootName}`)
    setTabsData(newTabsData);
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
        
      
    </MainContainer>
  );
}
export default CDRHome;
