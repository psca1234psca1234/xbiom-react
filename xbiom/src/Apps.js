import React, { Fragment, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
 import './App.css';
import { SideBar } from "pcsharedlibrary";

import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import ClosableTab from "./Components/ClosableTab";

function Apps() {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const sideBarHandler = () => {
    setSideBarToggle(!sideBarToggle);
  };
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    {key : 'name', name : "Name"}
  ];
  
  const rows = [
    { id: 0, title: 'Example', name :'test' },
    { id: 1, title: 'Demo', name: 'hello' },

  ];
  return (
    <Fragment>
      <p>Closable Tab</p>
      <ClosableTab/>
      {/* <DataGrid columns={columns} rows={rows} /> */}
    </Fragment>
  );
}

export default Apps;




