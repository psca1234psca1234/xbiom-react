import React, { useContext, useState } from "react";
import { PcContext, SideBar } from "pcsharedlibrary";
import { useNavigate } from "react-router-dom";
import { mdrJsonData } from "../../resources/data/jsonData";
import { mdrFilePath } from "../../resources/data/filePath";
import {
  MainContainer,
  ContainerFRow,
} from "../../resources/css/MainStyle";
import MyWorkSpace from "../MyWorkSpace";
import CloseableTabs from "react-closeable-tabs";
import generateTabDataForSubItem from "../../Controller/MDRtabController";
import { ConMDRJsonToSidebarData } from "../../Controller/ConJsonToSidebarData";

const MDRHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const convertedData = ConMDRJsonToSidebarData(mdrJsonData);
const [root,setRootName] = useState("");
  const [tabsData, setTabsData] = useState([
    {
      tab: "My Workspace",
      component: <MyWorkSpace />,
      id: 0,
      tabIndex :0
    },
  ]);

  const customNav = (sideBarName) => {
    const rootName = sideBarName.replace(/\s/g, "").toLowerCase();
    const newTabsData = generateTabDataForSubItem(rootName);
    const tabIds = tabsData.map((existingTab) => existingTab.id);
    newTabsData.forEach((newTab) => {
      if (!tabIds.includes(newTab.id)) {
        newTab.tabIndex = tabsData.length;
        setTabsData((prevTabsData) => [...prevTabsData, newTab]);
      }
      setActiveIndex(newTab.tabIndex);
    });
    setRootName(rootName)
    navigate(`${mdrFilePath.mdrBaseUrl}${rootName}`);
  };

  const handleTabClick = (tab) => {
    console.log("tabdata", tabsData);
    const tabData = tabsData.filter(item => item.id == tab)
    const fromatedName = tabData[0].tab.replace(/\s/g,"").toLowerCase();
    setActiveIndex(tabData[0].tabIndex)

// .tab.replace(/\s/g,"").toLowerCase();

    console.log(  `${mdrFilePath.mdrBaseUrl}${root}`)
    navigate(`${mdrFilePath.mdrBaseUrl}${fromatedName}`);
  };
  const handleTabClose = (tabid) => {
    console.log(tabid);
    // console.log("tabdata", tabsData);
    const removedTab = tabsData.filter((item) => item.id !== tabid);
    setTabsData(removedTab); 
  };
  const closeTab=(tabid) =>{
      console.log(tabid)
  }
  return (
    <MainContainer>
      <ContainerFRow>
        <SideBar items={convertedData} onItemClick={customNav} />
        <CloseableTabs
          tabPanelColor="lightgray"
          data={tabsData}
          activeIndex={activeIndex}
          onTabClick={handleTabClick} 
          onCloseTab ={handleTabClose} 
        />
      </ContainerFRow>
    </MainContainer>
  );
  }  

export default MDRHome;
