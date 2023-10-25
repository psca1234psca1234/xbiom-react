import AllStages from "../Components/AllStages";
import DataImport from "../Components/MDR Components/DataImport";
import Loadstatus from "../Components/MDR Components/Loadstatus";
import QCDashboard from "../Components/MDR Components/QCDashboard";
import SendDataStd from "../Components/MDR Components/SendDataStd";
import StudyInitiate from "../Components/MDR Components/StudyInitiate";
import StudyTracker from "../Components/MDR Components/StudyTracker";
import Studyreview from "../Components/MDR Components/Studyreview";
import MyWorkSpace from "../Components/MyWorkSpace";
import ShowInvolved from "../Components/ShowInvolved";

const tabDataConfig = {
    myworkspace: {
      tab: "My Workspace",
      component: <MyWorkSpace />,
      id: 0,
      tabIndex: 0,
      
    },
    showinvolved: {
      tab: "Show Involved",
      component: <ShowInvolved />,
      id: 1,
      tabIndex: null,
      draggable:true,
      closeable : true
    },
    allstages: {
      tab: "All Stages",
      component: <AllStages />,
      id: 2,
      tabIndex:  null,
      closeable : true
    },
    studyinitiate: {
      tab: "Study Initiate",
      component: <StudyInitiate />,
      id: 3,
      tabIndex: null,
      closeable : true
    },
    dataimport:{
        tab: "Data Import",
        component: <DataImport />,
        id: 4,
        tabIndex: null,
        closeable : true
    },
    studyreview:{
        tab: "Study Review",
        component: <Studyreview />,
        id: 5,
        tabIndex: null,
        closeable : true
    },
    qcdashboard:{
        tab: "QC Dashboard",
        component: <QCDashboard />,
        id: 6,
        tabIndex: null,
        closeable : true
    },
    loadstatus:{
        tab: "Load Status",
        component: <Loadstatus />,
        id: 7,
        tabIndex: null,
        closeable : true
    },
    senddatastandardization:{
        tab: "Send Data Standardization",
        component: <SendDataStd />,
        id: 8,
        tabIndex: null,
        closeable : true
    },
    studytracker:{
        tab: "Study Tracker",
        component: <StudyTracker />,
        id: 9,
        tabIndex: null,
        closeable : true
    }
    // Add other tab data objects as needed
  };
  
  const generateTabDataForSubItem = (subItemName) => {
    // Use the configuration object to generate tab data
    const tabConfig = tabDataConfig[subItemName];
    if (tabConfig) {
      return [tabConfig];
    }
  
    // Default: Return an empty array if no matching subItemName is found
    return [];
  };
  
  export default generateTabDataForSubItem;
  