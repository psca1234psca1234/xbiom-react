
import React, { useState, useContext, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Drawer, List, colors, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { PcContext } from '../../store/PCStore'
import { SideBarContainer, sidebartext } from './SIdeBarStyle 1'

import HomeIcon from '@mui/icons-material/Home';
import CustomPopover from '../Popover/CustomPopover'
import { event } from 'webix'





const drawerWidth = 240


const SideBar = ({ items, theme, indentationLevel = 0, onItemClick }) => {


  const [pcContext, setPcContext] = useContext(PcContext)
  // const [expandItems, setExpandItems] = useState({})
  const [expandItems, setExpandItems] = useState({});
  // const [isActive, setIsActive] = useState(true)
  const [allItems, setAllItems] = useState(items)
  useEffect(() => {
    setExpandItems(initializeExpandItems(items));
  }, [])

  const initializeExpandItems = (allItems) => {
    const expandItems = {};

    const setInitialExpansion = (allItems) => {

      allItems.forEach((item) => {
        if (item.subItems && item.subItems.length > 0) {
          expandItems[item.text] = true; // Set subitems to be expanded by default

          setInitialExpansion(item.subItems);
          // setAllItems();
          allItems;
        }
      });
    };

    setInitialExpansion(allItems);
    return expandItems;

  };

  const mainItemClickHandler = (text, el) => {

    el.stopPropagation();

    // for expanding sub items.
    let cls = el.target.parentElement.classList.contains('listItemButtonclass');
    if (!cls) {
      setExpandItems((prevState) => ({
        ...prevState,
        [text]: !prevState[text]
      }))
    }
  }



  var open = pcContext.sideBarCollapsed;
const [subItemList, setSubItemList] = useState([]);
  const handleItemSelect = (text, parentText, event) => {
    const updatedItems = markAncestorsActive(allItems, text)
    setAllItems(updatedItems);
    var url = parentText ? parentText + '/' + text : text;

    if (open) {
      openList(event);
      var foundItem = allItems.find(item => item.text === text);
      if(foundItem && foundItem.subItems){
        var itemList = foundItem.subItems.map(subItem => {
          return subItem.text
        })
        setSubItemList(itemList);
      }
      

      var dummyList = allItems.filter(item => item.text === text).s
    }

    onItemClick(url);
  }
  
  function switchTo() {

  }
  const markAncestorsActive = (items, text, parentText = null) => {

    return items.map((item) => {
      if (item.text === text) {
        item.active = 1
      } else if (item.text !== text) {
        item.active = 0
      }

      if (item.subItems) {
        item.subItems = markAncestorsActive(item.subItems, text, item.text)
        if (item.subItems.some((subItem) => subItem.active == 1 || subItem.isactive == true)) {
          // item.active = 1
          item.isactive = true;
        }
        else {
          item.isactive = false;
        }
        return item
      }

      return item
    })
  }

  // const renderFontAwesomeIcons = (i)=>{
  //   return <FontAwesomeIcon icon = {i} />;
  // }
  const renderMenuItems = (items, isSubitem, indentationLevel, parentMenuName) => {
    return (
      items &&
      items.map((item) => (
        <Fragment>
          <ListItem
            className="listitemsclass"
            style={
              item.active == 1
                ? {
                  backgroundColor: '#f1f1f1', borderRight: '3px solid #7e7e7e'
                } : {}
            }
            onClick={(e) => {

              handleItemSelect(item.text, parentMenuName, e);

            }}

            sx={{
              paddingLeft: isSubitem ? `${indentationLevel * 20}px` : '0',
              borderRight: item.isactive ? '3px solid #7e7e7e' : '',
            }}
          >
            <ListItemButton
              className="listItemButtonclass"


            >
              <ListItemIcon

                sx={{ color: item.isactive || item.active == 1 ? 'blue' : '' }}
                className='listItemIconClass'
                // sx={{ paddingLeft: '-18px' }}
                style={{ marginLeft: open ? '12px' : '' }}
              > {isSubitem ? (
                <i
                  className='fa fa-genderless'
                  style={{ paddingLeft: '2px' }}
                > </i>
              ) : (<i
                className={item.icon}
                style={{ paddingLeft: '2px' }}
              ></i>)}
              </ListItemIcon>
              <ListItemText
                style={!open ? { display: 'inline' } : { display: 'none' }}
                color={item.active == 1 ? '#000' : '#7e7e7e'}

                className="listItemTextttt"
                primary={item.text}
                size='small'
                sx={{ color: item.isactive || item.active == 1 ? 'blue' : '' }}
              />
              {item.subItems && item.subItems.length > 0 && (
                <IconButton
                  onClick={(e) => {
                    mainItemClickHandler(item.text, e)
                  }}
                  sx={{
                    marginLeft: 'auto',
                    transform: expandItems[item.text]
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)'
                  }}
                  size='small'
                >
                  <ExpandMoreIcon sx={{ MarginLeft: '20px' }} />
                </IconButton>
              )}
            </ListItemButton>
          </ListItem>
          <Divider />
          {item.subItems &&
            item.subItems.length > 0 &&
            expandItems[item.text] &&
            (!open || !expandItems[item.text]) && (
              <List className='subitemsClass' >
                {renderMenuItems(item.subItems, true, indentationLevel + 1, (parentMenuName) ? (parentMenuName + '/' + item.text) : (item.text))}
              </List>
            )}
        </Fragment>
      ))
    )
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
  const open1 = Boolean(anchorEl);
  return (
    <SideBarContainer>
      <Drawer
        variant='permanent'
        open={open}
        // className="Sidebar"  
        className={open ? 'collapsedSidebar' : 'sidebar'}
        //  style={!open ? { width: pcContext.sideBarWidth + 'px'  } : { width: pcContext.sideBarCollapsedWidth + 'px' }}
        // style={!open ? {className:'sidebar'}:{className:'collapsedSidebar'}}
        sx={{
          display: { xs: 'none', sm: 'block' },
          borderRadius: '2px',
          flexShrink: 0,
          backgroundColor: '#1b71f2',
          '& .MuiDrawer-paper': {
            marginTop: '50px',
            width: open ? pcContext.sideBarCollapsedWidth : pcContext.sideBarWidth,
            backgroundColor: '#1b71f2'
          }
        }}
        anchor="left"
      >
        <List className="listClass" >{renderMenuItems(allItems, false, 0)}</List>
      </Drawer>
      <CustomPopover
        open={open1}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        items={subItemList}
        switchTo={switchTo}
      />
    </SideBarContainer>
  )
}



export default SideBar
