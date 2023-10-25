import React from 'react'
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto'
import PCWebixGrid from './PCWebixGrid'
import webix from 'webix/webix.min.js'

function TabularGrid({config,tabButtons}) {
    const filterAllColumns = (searchText) =>{
        // below lnes will filter for all columns with includes
        debugger
         const tabBarGrid = webix.$$(config.id);
         tabBarGrid.filter(function (item) {
           for (const key in item) {
             if (item.hasOwnProperty(key) && key !== 'id') {
               if (item[key].toString().toLowerCase().includes(searchText.toLowerCase())) {
                 return true; // Return true if any column matches the search text
               }
             }
           }
           return false; // Return false if no column matches the search text
         });
          // Check the count of filtered rows
       const filteredRowCount = tabBarGrid.count();
     
       // Display "No Data Available" if the filter count is 0
       if (filteredRowCount === 0) {
         tabBarGrid.showOverlay("No Data Available");
       } else {
         tabBarGrid.hideOverlay();
       }
       };
    const handleTabButton =()=>{

        
    }
    const handleGridId = (gridId) =>{
console.log("gridname issss",gridId)
    }
  return (
    <div>
    <ScrollableTabsButtonAuto buttonNames={tabButtons} onFilter={filterAllColumns} onButtonClick={handleTabButton} getGridId={handleGridId}/>
    <PCWebixGrid config={config} />
</div>
  )
}

export default TabularGrid