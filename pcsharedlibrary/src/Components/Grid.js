import React from 'react';
import webix from 'webix/webix.js';
import 'webix/webix.css';
import CreateWebixUi from '../Utils/CreateWebixUi.js';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto.js'

const Grid = ({ columns, data, config ,tabButtons}) => {
  var gridData = [
    { id: 1, title: "Task 1", dueDate: "2023-10-15", status: "Incomplete" },
    { id: 2, title: "Task 2", dueDate: "2023-10-16", status: "Complete" },
    { id: 3, title: "Task 3", dueDate: "2023-10-17", status: "Incomplete" },
    { id: 4, title: "Task 4", dueDate: "2023-10-18", status: "Complete" },
    { id: 5, title: "Task 5", dueDate: "2023-10-19", status: "Incomplete" }
]; 
var gridColumns = [
  { id: "id", header: "ID", width: 50 },
  { id: "title", header: "Title", fillspace: true },
  { id: "dueDate", header: "Due Date", width: 150 },
  { id: "status", header: "Status", width: 100 }
];

  const grid = {
    view: config.view || "datatable",
    id :"tabBarGrid",
    scroll: true,
    autoheight: true,
    select: true,
    columns: gridColumns,
    data: gridData,
    editable: true,
    template : function(obj){
      if(webix.$$('tabBarGrid').count() ===0){
        return "No Data Available";
      }
    }
  };

  // const toolbar = {
  //   view: "toolbar",
  //   elements: [
  //     { view: "segmented", options: ["Refresh", "Save", "Cancel"] },
  //     { view: "search" },
  //     {},
  //   ],
  // };

  const uiConfig = {
    rows: [grid],
  };

  const filterAllColumns = (searchText) =>{
   // below lnes will filter for all columns with includes
    const tabBarGrid = webix.$$("tabBarGrid");
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
  /*
const filterPrimaryColumn = (searchText) => {
 // below 5 line will filter for only based on the title  
    webix.$$("tabBarGrid").filter(function(item){
      return item.title.toString().toLowerCase().includes(searchText.toLowerCase())
    })
};
*/
const da = {
  rows: [
    {
      view: "list",
      data: [{ id: 1, value: "Item 1" }, { id: 2, value: "Item 2" }],
      template: "#value#",
    },
  ],
};
// CreateWebixUi(uiConfig, "grid");
  return (
    <div>
      {/* <ScrollableTabsButtonAuto buttonNames={tabButtons} onFilter={filterAllColumns}/> */}
      <CreateWebixUi uiConfig={uiConfig}/>
      <div id='grid'></div>

</div>
  );
};

export default Grid;
