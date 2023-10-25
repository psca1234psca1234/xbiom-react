import { Header } from 'pcsharedlibrary'
import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CDRHome from './Components/CDR Components/CDRHome';
import MDRHome from './Components/MDR Components/MDRHome.js';
import { Constants } from './data/Constants';
import pcLogo from '../src/resources/imgs/pcLogo.png'

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const [domain, setDomainName] = useState("MDR");

    const handleSwitch=(domainName)=>{
        
        if(domainName === Constants.CDR){
            setDomainName(domainName);
            navigate(`/${Constants.CDR.toLowerCase()}`);
             //navigate(`/cdr`);
            
        }else{
            setDomainName(domainName);
            navigate('/mdr');
            console.log(domainName);
        }
    };
    const headerConfig = {
        pcLogo,
        leftText: "PointCross",
        pcLink: "https://insightsaastest.xbiom.com/SWP/6/93#home",
        pcLinkTooptip: "Pointcross Home",
      };
  return (
    <div>
        <Header headerConfig={headerConfig} switchTo={handleSwitch}/>
        {domain == 'CDR' && (          
            <CDRHome/>
        )}
        {domain == 'MDR' && <MDRHome/>}
    </div>
   
   
  )
}

export default Home