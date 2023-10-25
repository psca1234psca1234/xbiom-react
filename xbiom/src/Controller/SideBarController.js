import React, { useState } from "react";
import { Constants } from "../resources/data/Constants";
import { useNavigate } from "react-router-dom";

// export const SideBarListChange = (domainName) => {
//     debugger
//   const [domain, setDomainName] = useState("MDR");
//   const navigate = useNavigate();

//   if (domainName === Constants.CDR) {
//     setDomainName(domainName);
//     navigate(`/${Constants.CDR.toLowerCase()}`);
//     navigate(`/cdr`);
//   } else {
//     setDomainName(domainName);
//      navigate("/mdr");
//   }
// };
export const HeaderBarCheckBoxChange = (domainName) => {
    debugger
  //const [domain, setDomainName] = useState("");
  const navigate = useNavigate();

  if (domainName === Constants.CDR) {
    //setDomainName(domainName);
    navigate(`/cdr`);
    //navigate(`/cdr`);
  } else {
   //setDomainName(domainName);
    navigate("/mdr");
  }
};
