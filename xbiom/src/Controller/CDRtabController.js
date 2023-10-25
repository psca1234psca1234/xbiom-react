import All from "../Components/CDR Components/All";
import Send from "../Components/CDR Components/Send";
import Custom from "../Components/CDR Components/Custom";
const tabDataConfig = {
    all:{
        tab: "All",
        component: <All />,
        id: 0,
        tabIndex: null,
    },
    send:{
        tab: "Send",
        component: <Send />,
        id: 1,
        tabIndex: null,
    },
    custom:{
      tab: "Custom",
      component: <Custom />,
      id: 2,
      tabIndex: null,
    },
    studymodels:{
      tab: "Study Models",
      component: <h2> study models</h2>,
      id: 2,
      tabIndex: null,
    },
    importhistory:{
      tab: "Import History",
      component: <h2>Import History</h2>,
      id: 2,
      tabIndex: null,
    },
    notifications:{
      tab: "Notification",
      component: <h2>Notification</h2> ,
      id: 2,
      tabIndex: null,
    }
}

const cdrGenerateTabDataForSubItem = (subItemName) => {
    // Use the configuration object to generate tab data
    const tabConfig = tabDataConfig[subItemName];
    if (tabConfig) {
      return [tabConfig];
    }
  
    // Default: Return an empty array if no matching subItemName is found
    return [];
  };
  
  export default cdrGenerateTabDataForSubItem;
  