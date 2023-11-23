import About from "../Components/MDR Components/About";
import ControlledTerminology from "../Components/MDR Components/ControlledTerminologyDummy";
import DataIngestion from "../Components/MDR Components/DataIngestion";
import SDS from "../Components/MDR Components/SDS";
import StudyListing from "../Components/MDR Components/StudyListing";
import StudyTracker from "../Components/MDR Components/StudyTracker";


  const comDataConfig = {
    controlledterminology : <ControlledTerminology/>,
    about:<About/>,
    studylisting: <StudyListing/>,
    dataingestion : <DataIngestion/>,
    senddatastandardization : <SDS/>,
    studytracker : <StudyTracker/>,
  }
  export const mdrGetComponent =(subItemName)=>{
    const componentConfig = comDataConfig[subItemName];
    return componentConfig || null;
  }