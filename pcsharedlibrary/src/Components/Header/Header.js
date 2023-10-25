import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze'

import {
  HeaderBar,
  HeaderButtonChild,
  HeaderButtonGroup,
  HeaderMainContainer,
  ImageContainer,
  Label,
  LabelContainer,
  LeftSideContainer,
  LogoLink,
  PCLogo,
  RightSideContainer
} from './HeaderStyle'
import { PcContext } from '../../store/PCStore'
import { Container } from '@mui/material'

const Header = ({ headerConfig }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeButton, setActiveButton] = useState('MDR')
  const [pcContext, setPcContext] = useContext(PcContext)
  // const [sideBarWidth, setSideBarWidth] = useState(pcContext.sideBarWidth);

  const switchTo = (domainName) => {
    setActiveButton(domainName)
    if (domainName === 'CDR') {
      navigate(`/cdr`)
    } else {
      navigate('/mdr')
    }
  }
  const testClick = () => {
    //debugger
    setPcContext((prevs) => ({
      ...prevs,
      sideBarCollapsed: !prevs.sideBarCollapsed
    }))
    // if(sideBarWidth == '140px'){
    //   setPcContext((prevContext) =>{
    //     return {...prevContext,
    //       sideBarWidth : "240px",
    //       sideBarContWidth : "300px"
    //     }
    //   })
    // } else{
    //   setPcContext((prevContext) =>{
    //     return {...prevContext,
    //       prevContext["sideBarWidth"] : "140px",
    //       prevContext["sideBarContWidth"] : "160px"
    //     }
    //   })
    // }
    // if (pcContext.sideBarWidth === '140px') {
    //   setPcContext((prevContext) => ({
    //     ...prevContext,
    //     sideBarWidth: "240px",
    //     sideBarContWidth: "300px",
    //   }));
    // } else {
    //   setPcContext((prevContext) => ({
    //     ...prevContext,
    //     sideBarWidth: "140px",
    //     sideBarContWidth: "160px",
    //   }));
    // }
    // navigate('/mdr/');
    // navigate('/mdr/showinvolved');
  }
  // var currDate = new Date();
  // console.log(currDate)
  // debugger
  // function getCurrentTime() {
  //   const now = new Date();
  
  //   // Get the date components
  //   const day = now.getDate();
  //   const month = now.toLocaleString('default', { month: 'short' });
  //   const year = now.getFullYear();
  
  //   // Get the time components
  //   const hours = now.getHours();
  //   const minutes = now.getMinutes();
  //   const ampm = hours >= 12 ? 'PM' : 'AM';
  //   const hour12 = hours % 12 || 12; // Convert to 12-hour format
  
  //   // Get the UTC offset
  //   const utcOffset = now.getTimezoneOffset();
  //   const utcOffsetHours = Math.floor(Math.abs(utcOffset) / 60);
  //   const utcOffsetMinutes = Math.abs(utcOffset) % 60;
  //   const utcOffsetSign = utcOffset < 0 ? '-' : '+';
  
  //   // Format the time string
  //   const timeString = `${day}-${month}-${year} ${hour12}:${minutes} ${ampm} (UTC ${utcOffsetSign} ${utcOffsetHours}:${utcOffsetMinutes < 10 ? '0' : ''}${utcOffsetMinutes})`;
  
  //   return timeString;
  // }
  
  // const currentTime = getCurrentTime();
  // console.log(currentTime);
  

  return (
    <HeaderMainContainer>
      <HeaderBar>
        {/* <button onClick={testClick}>collapsed/Expand</button> */}
        <LeftSideContainer>
          <DehazeIcon onClick={testClick} titleAccess='Expand/Collapse Side Bar'  className='sideBarClosableIcon'/>
          <HeaderButtonGroup>
            <HeaderButtonChild
              is_active={(activeButton == 'MDR').toString()}
              onClick={() => switchTo('MDR')}
              title={`Switch To MDR`}
            >
              MDR
            </HeaderButtonChild>
            <HeaderButtonChild
              is_active={(activeButton == 'CDR').toString()}
              onClick={() => switchTo('CDR')}
              title='SWitch To CDR'
            >
              CDR
            </HeaderButtonChild>
          </HeaderButtonGroup>
        </LeftSideContainer>
        <RightSideContainer>
          <LabelContainer>
            <Label>Development Environment</Label>
            <Label>| Christo |</Label>
          </LabelContainer>
          <ImageContainer>
            <LogoLink
              href={headerConfig.pcLink}
              target='_blank'
              title={headerConfig.pcLinkTooptip}
            >
              <PCLogo src={headerConfig.pcLogo}></PCLogo>
            </LogoLink>
          </ImageContainer>
        </RightSideContainer>
      </HeaderBar>
    </HeaderMainContainer>
  )
}

export default Header
