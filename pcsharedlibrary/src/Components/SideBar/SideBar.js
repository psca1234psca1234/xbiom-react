import React, { useState, useEffect, useContext } from 'react';
import {PcContext} from '../../store/PCStore';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { SideBarContainer } from './SIdeBarStyle'


const  SideBar = ({ items, onItemClick }) => {
  const [itemStates, setItemStates] = useState({});
  const [pcContext, setPcContext] = useContext(PcContext);
  const [sideBarWidth, setSideBarWidth] = useState(pcContext.sideBarWidth);

  useEffect(() => {
    // Initialize itemStates with all sub-items expanded by default
    const initialItemStates = {}
    items.forEach((item) => {
      if (item.subItems) {
        initialItemStates[item.text] = true
      }
    })
    setItemStates(initialItemStates)
  }, [items])

  const handleCollapseClick = (text) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [text]: !prevStates[text]
    }))
  }

  const handleItemClick = (text) => {
    debugger
    console.log(text)

    onItemClick(text.replace(/\s/g, ''))
  }

  const renderItems = () => {
    return items.map((item, i) => (
      <SideBarContainer w={pcContext.sideBarContainerWidth} key={i}>
        <ListItem disablePadding key={item.text + i}>
          <ListItemButton key={item.text + (i * 2)}
            onClick={() => {
              if (!item.subItems) {
                handleItemClick(item.text)
              } else {
                handleCollapseClick(item.text)
              }
            }}
          >
            <ListItemText primary={item.text} key={item.text +  (i * 3)} />
            {item.subItems &&
              (itemStates[item.text] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </ListItem>
        {item.subItems && (
          <Collapse in={itemStates[item.text]} timeout='auto' unmountOnExit>
            <List key={item.text + ( i * 5)} component='div' disablePadding sx={{ paddingLeft: '20px' }}>
              {item.subItems.map((subItem , i) => (
                <ListItem
                  onClick={() => handleItemClick(subItem.text)}
                  key={i}
                  disablePadding
                >
                  <ListItemButton key={subItem.text + i}>
                    <ListItemText key={subItem.text + (i * 2)} primary={subItem.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
        <Divider />
      </SideBarContainer>
    ))
  }

  const drawer = (
    <div>
      <Divider />
      <List>{renderItems()}</List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: sideBarWidth,
            marginTop: '50px'
          }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
 
}

export default SideBar
