import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage, PcContext } from "pcsharedlibrary";
import { mdrContextData } from "./resources/data/ContextData";
import CDRHome from "./Components/CDR Components/CDRHome";
import MDRHome from "./Components/MDR Components/MDRHome";
import MyWorkSpace from "./Components/MyWorkSpace";
import { Header } from "pcsharedlibrary";
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
        <Header headerConfig={headerConfig} />
        <Routes>
          <Route path="/" element={<MDRHome />} />
          <Route path={mdrFilePath.mdrBaseUrl} element={<MDRHome />} />
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
