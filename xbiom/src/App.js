import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage, PcContext } from "pcsharedlibrary";
import { mdrContextData } from "./resources/data/ContextData";
import CDRHome from "./Components/CDR Components/CDRHome";
import MDRHome from "./Components/MDR Components/MDRHome";
import { Header,HeaderNew } from "pcsharedlibrary";
import { cdrFilePath, mdrFilePath } from "./resources/data/filePath";
import pcLogo from "./resources/imgs/pcLogo.png";

const App = () => {
  const [pcContext, setPcContext] = useState(mdrContextData); // Globally intialize our MDR store Data.
  //const navigate = useNavigate();

  const headerConfig = {
    pcLogo,
    leftText: "PointCross",
    pcLink: "https://insightsaastest.xbiom.com/SWP/6/93#home",
    pcLinkTooptip: "Pointcross Home",
  };

  return (
    <PcContext.Provider value={[pcContext, setPcContext]}>
      <BrowserRouter basename="/">
        {/* <Header headerConfig={headerConfig} /> */}
        <HeaderNew headerConfig= {headerConfig}/>
        <Routes>
          <Route path="/" element={<MDRHome />} />
          <Route path={mdrFilePath.mdrBaseUrl} element={<MDRHome />} />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.terminologyUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.ctUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.globalCTUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.standardUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.modelCTUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.localCTUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.externalDictUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.systemCodelistUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.dataDefinationUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.standardUnitUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.UCFurl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.modelManagementUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.aboutUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.studylistingUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.dataingestionUrl}`}
            element={<MDRHome />}
          /><Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.sdsUrl}`}
            element={<MDRHome />}
          /><Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.studytrackerUrl}`}
            element={<MDRHome />}
          />

          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.workspaceUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.showinvolvedUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.allstagesUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.studyinitiateUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.dataimportUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.studyreviewUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.qcdashboardUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.loadstatusUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.senddatastandardizationUrl}`}
            element={<MDRHome />}
          />
          <Route
            path={`${mdrFilePath.mdrBaseUrl}${mdrFilePath.studytrackerUrl}`}
            element={<MDRHome />}
          />




          <Route path={cdrFilePath.cdrBaseUrl} element={<CDRHome />} />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.workspaceUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.allbatchesUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.viewdeletedbatchesUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.allUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.sendUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.customUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.studymodelsUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.importhistoryUrl}`}
            element={<CDRHome />}
          />
          <Route
            path={`${cdrFilePath.cdrBaseUrl}${cdrFilePath.notificationsUrl}`}
            element={<CDRHome />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </PcContext.Provider>
  );
};
export default App;
