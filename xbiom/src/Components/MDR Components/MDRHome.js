import React, { useState, useEffect } from "react";
import { SideBar } from "pcsharedlibrary";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { simpleAll, simpleSideBar } from "../../resources/data/jsonData";
import { mdrFilePath } from "../../resources/data/filePath";
import {
  MainContainer,
  ContainerFRow,
} from "../../resources/css/MainStyle";
import  { mdrGetComponent } from "../../Controller/MDRtabController";
import { ConMDRJsonToSidebarData } from "../../Controller/ConJsonToSidebarData";
import About from "./About";
import { ConstantUrl } from "../../resources/data/DataUrl";
import ControlledTerminology from "./ControlledTerminologyDummy";
import { fetchData } from "../../Controller/PCapiFetch";
import { CTDataConverter, CTHeaderConverter, HeaderDataConvert, RowDataConverter } from "../../Controller/DataConverter";
import CircularProgress from '@mui/material/CircularProgress';

const MDRHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [element, setElement] = useState();
  const location = useLocation();
const [gridCol,setColData] = useState({});
const [gridData,setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    document.cookie = 'H=S=f215327d-650c-4f78-a279-ce1d00a8c1d3';
    const fetchAndSetData = async () => {
      try {
        const rawData = await fetchData(ConstantUrl.CTSideBar);
        const parser = new DOMParser();
        const xmlDocument = parser.parseFromString(rawData, 'text/xml');
        console.log(xmlDocument);
        const gridCol = CTHeaderConverter(xmlDocument);
        const data = CTDataConverter(xmlDocument);
        console.log("useEffe",gridCol);
        console.log("useEffezxr",data);
               setColData(gridCol);
               setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAndSetData();
  }, []);
  const convertedData = ConMDRJsonToSidebarData(simpleSideBar);
  const [root, setRootName] = useState("");
  const [tabsData, setTabsData] = useState([
    {
      tab: "ControlledTerminology",
      component: <CircularProgress/>,
      id: 0,
      tabIndex: 0
    },
  ]);
  const setControlledTerminologyComponent = () => {
    debugger

    setElement(<ControlledTerminology gridCol={gridCol} dataa={gridData} />);
    // setTabsData(prevTabsData => {
    //   const updatedTabsData = [...prevTabsData];
    //   updatedTabsData[0].component = controlledTerminologyComponent;
    //   return updatedTabsData;
    // });
  };
  const customNav = (sideBarName) => {
    debugger
    console.log(location)
    const rootName = sideBarName.replace(/\s/g, "").toLowerCase();
    const finalRoot = rootName.split("/")[rootName.split("/").length-1]
    
    const ele = mdrGetComponent(finalRoot)
    setControlledTerminologyComponent()
    // setElement(ele)

    /** below commented code is for tab switching and it is usefull code */

   /* const newTabsData = mdrGenerateTabDataForSubItem(finalRoot);
    const tabIds = tabsData.map((existingTab) => existingTab.id);
    newTabsData.forEach((newTab) => {
      if (!tabIds.includes(newTab.id)) {
        newTab.tabIndex = tabsData.length;
        setTabsData((prevTabsData) => [...prevTabsData, newTab]);
      }
      setActiveIndex(newTab.tabIndex);
    });
    */
    setRootName(rootName)
    navigate(`${mdrFilePath.mdrBaseUrl}${rootName}`);
  };

  const handleTabClick = (tab) => {
    console.log("tabdata", tabsData);
    const tabData = tabsData.filter(item => item.id == tab)
    const fromatedName = tabData[0].tab.replace(/\s/g, "").toLowerCase();
    setActiveIndex(tabData[0].tabIndex)
    navigate(`${mdrFilePath.mdrBaseUrl}${fromatedName}`);
  };
  const handleTabClose = (tabid) => {
    const removedTab = tabsData.filter((item) => item.id !== tabid);
    setTabsData(removedTab);
  };
 
  return (
    <MainContainer>
      <ContainerFRow>
        <SideBar items={convertedData} onItemClick={customNav} />
    {element}
      </ContainerFRow>
    </MainContainer>
  );
}

export default MDRHome;
