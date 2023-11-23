import React, { Fragment, useContext } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link, useLocation } from 'react-router-dom'
import { PcContext } from '../store/PCStore'
import '../css/commonStyles.css'

const menuItemStyle = {
  li: {
    color: 'red !important;'
  }
}

function renderSubMenuItems(subItems, onItemClick,parentMenuName, currentLevel = 0) {
  const location = useLocation();
  if (!subItems || subItems.length === 0) {
    return null;
  }

  return subItems.map((subItem, i) => {
    const isHidden = subItem.hidden;
    if (isHidden) {
      return null;
    }

    if (subItem.subItems && subItem.subItems.length > 0 && currentLevel < 3) {
      const isActive = location.pathname === subItem.linkUrl;
      return (
        <SubMenu
          key={subItem.text + i}
          defaultOpen={false}
          label={subItem.text}
        >
          {renderSubMenuItems(subItem.subItems, onItemClick,subItem.text, currentLevel + 1)}
        </SubMenu>
      );
    } else {
      const isActive = location.pathname === subItem.linkUrl;
      return (
        <MenuItem
          key={subItem.text + i}
          className={isActive ? 'active' : ''}
          style={isActive ? { backgroundColor: '#c2cfc0' } : {}}
          onClick={() => onItemClick(parentMenuName+'/'+subItem.text)}
        >
          {' '}
          {subItem.text}{' '}
        </MenuItem>
      );
    }
  });
}

function SideBar({ items, onItemClick }) {
  const [pcContext, setPcContext] = useContext(PcContext);

  return (
    <Fragment>
      <Sidebar
        width={pcContext.sideBarWidth + 'px'}
        collapsedWidth={pcContext.sideBarCollapsedWidth + 'px'}
        collapsed={pcContext.sideBarCollapsed}
      >
        <Menu closeOnClick={true}>
          {items.map((item, i) => {
            const isHidden = item.hidden;
            if (isHidden) {
              return null;
            }

            if (item.subItems && item.subItems.length > 0) {
              return (
                <SubMenu
                  key={item.text + i}
                  defaultOpen={false}
                  label={item.text}
                >
                  {renderSubMenuItems(item.subItems, onItemClick,item.text)}
                </SubMenu>
              );
            } else {
              return (
                <MenuItem
                  key={item.text + i}
                  onClick={() => onItemClick(item.text)}
                >
                  {' '}
                  {item.text}{' '}
                </MenuItem>
              );
            }
          })}
        </Menu>
      </Sidebar>
    </Fragment>
  );
}

export default SideBar;
