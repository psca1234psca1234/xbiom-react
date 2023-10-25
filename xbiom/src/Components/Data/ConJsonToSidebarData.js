import React from 'react'

function ConJsonToSidebarData(jsonData) {
    const sidebarItems = [];
    if (jsonData && jsonData.HEADER && jsonData.HEADER.I) {
        jsonData.HEADER.I.forEach((item) => {
            const sidebarItem = {
                text: item.TEXT,
                subItems: null,
                id : item.CID,
                icon : item.ICONCLS,
                disable : item.DISABLED,
                active : item.ACTIVE,
        };
        if (item.I) {
            const sidebarSubItems =[];
            item.I.map((subItem) =>{
              const  sidebarItem ={
                    text : subItem.TEXT,
                    subItem : null,
                    id : subItem.CID,
                    icon : subItem.ICONCLS,
                    disable: subItem.DISABLED,
                    active: subItem.ACTIVE
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

export default ConJsonToSidebarData