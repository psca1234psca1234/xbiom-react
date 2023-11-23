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
  MiddleContainer,
  PCLogo,
  ProfileContainer,
  RightSideContainer
} from './HeaderStyleNew'
import { PcContext } from '../../store/PCStore'
import { Box, Container, ListItemButton } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import CustomPopover from '../Popover/CustomPopover'


const HeaderNew = ({ headerConfig }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [pcContext, setPcContext] = useContext(PcContext)

  const switchTo = (domainName) => {
    
    setActiveButton(domainName)
    if (domainName === 'Switch CDR') {
      navigate(`/cdr`)
    } else {
      navigate('/mdr')
    }
  }
  const testClick = () => {
    setPcContext((prevs) => ({
      ...prevs,
      sideBarCollapsed: !prevs.sideBarCollapsed
    }))
   
  }
 
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openList = (event) => {
    handlePopoverOpen(event);
  };

  const open = Boolean(anchorEl);
  function rendeItemList(){
    var itemList = []
    var boolean =location.pathname === '/cdr'
    itemList.push(boolean?'Switch MDR' : 'Switch CDR');
    itemList.push('Change Password','Logout');
    return itemList
  };
  return (
    <HeaderMainContainer>
      <HeaderBar>
        <LeftSideContainer>
          <ImageContainer>
            <LogoLink
              href={headerConfig.pcLink}
              target='_blank'
              title={headerConfig.pcLinkTooptip}
            >
              <PCLogo src={headerConfig.pcLogo}></PCLogo>
            </LogoLink>
          </ImageContainer>
          <DehazeIcon onClick={testClick} titleAccess='Expand/Collapse Side Bar' className='sideBarClosableIcon' />
        </LeftSideContainer>
        <MiddleContainer>
          <Label> {location.pathname === '/cdr' ? ('CDR') : ('MDR')}    </Label>
        </MiddleContainer>
        <RightSideContainer>

          <LabelContainer>
            <Label>About</Label>

          </LabelContainer>
          <Avatar sx={'margin-right:10px'} onClick={openList}>A</Avatar>


        </RightSideContainer>
        <CustomPopover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            items={rendeItemList()}
            switchTo={switchTo}
          />
      </HeaderBar>
    </HeaderMainContainer>
  )
}

export default HeaderNew
