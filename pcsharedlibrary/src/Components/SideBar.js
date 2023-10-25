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

function SideBar({ items, onItemClick }) {
  const [pcContext, setPcContext] = useContext(PcContext)
  const location = useLocation()
  return (
    <Fragment>
      <Sidebar
        width={pcContext.sideBarWidth + 'px'}
        collapsedWidth={pcContext.sideBarCollapsedWidth + 'px'}
        collapsed={pcContext.sideBarCollapsed}
      >
        <Menu closeOnClick={true}>
          {items.map((item, i) => {
            if (!!item.subItems) {
              return (
                <SubMenu
                  key={item.text + i}
                  defaultOpen={true}
                  label={item.text}
                >
                  {item.subItems.filter((subitem) => subitem.disable =="false").map((subItem, i) => {
                    const isActive = location.pathname === subItem.linkUrl;
                    

                    return (
                      <MenuItem
                        key={subItem.text + i}
                        className={isActive ? 'active' : ''}
                        style={isActive ? { backgroundColor: '#c2cfc0' } : {}}
                        onClick={() => onItemClick(subItem.text)}
                      >
                        {' '}
                        {subItem.text}{' '}
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            } else {
              const isHidden = item.hidden; // Check if the item is hidden

              if (isHidden) {
                return null; // Don't render the item if it's hidden
              }

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

export default SideBar
