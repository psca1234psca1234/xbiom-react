import React from 'react'
import { mdrJsonData } from '../resources/data/jsonData';

export function ConMDRJsonToSidebarData(jsonData) {
  const sidebarItems = [];
  if (jsonData && jsonData.HEADER && jsonData.HEADER.I) {
    jsonData.HEADER.I.forEach((item) => {
      const sidebarItem = {
        text: item.TEXT,
        subItems: null,
        id: item.CID,
        icon: item.ICONCLS,
        disable: item.DISABLED,
        active: item.ACTIVE,
        key: item.CID
      };
      if (item.I) {
        const sidebarSubItems = [];
        item.I.map((subItem) => {
          const sidebarItem = {
            text: subItem.TEXT,
            subItem: null,
            id: subItem.CID,
            icon: subItem.ICONCLS,
            disable: subItem.DISABLED,
            active: subItem.ACTIVE,
            key: item.CID,
            linkUrl: subItem.LINKURl || ''
          }
          sidebarSubItems.push(sidebarItem);
        });
        sidebarItem.subItems = sidebarSubItems;
        // sidebarItem.subItems = item.I.map((subItem) => subItem.TEXT);
      }
      sidebarItems.push(sidebarItem);
    });
  }

  return sidebarItems;
}



// export function ConCDRJsonToSidebarData (jsonData){
//     const sidebarItems = [];

//     if (jsonData && json.ROOT && jsonData.ROOT.HEADER && jsonData.ROOT.HEADER.I) {
//         jsonData.HEADER.I.I.forEach((item) => {
//             sidebarItems.push({
//             text: item.TEXT,
//             icon: item.ICONCLS,
//             active: item.ACTIVE === 1,
//             disabled: item.DISABLED === "true",
//             // You can add more properties as needed
//           });
//         });
//       }  

// return sidebarItems;
// }


export function ConCDRJsonToSidebarData(jsonData) {
  const headerItems = jsonData.ROOT.HEADER;
  const sidebarItems = [];

  const navHeaders = headerItems.filter((item) => item.NAME == "NAVTREE_HEADERS");

  navHeaders[0].I.forEach((item) => {
    const sidebarItem = {
      text: item.TEXT,
      subItems: null,
      id: item.CID,
      icon: item.ICONCLS,
      disable: item.HIDDEN,
      active: item.ACTIVE,
      key: item.CID
    };
    if (item.I) {
      const sidebarSubItems = [];
      item.I.map((subItem) => {
        const sidebarItem = {
          text: subItem.TEXT,
          subItem: null,
          id: subItem.CID,
          icon: subItem.ICONCLS,
          disable: subItem.HIDDEN,
          active: subItem.ACTIVE,
          key: item.CID,
          linkUrl: subItem.LINKURl || ''
        }
        sidebarSubItems.push(sidebarItem);
      });
      sidebarItem.subItems = sidebarSubItems;
      // sidebarItem.subItems = item.I.map((subItem) => subItem.TEXT);
    }
    sidebarItems.push(sidebarItem);
  });

  return sidebarItems;
}