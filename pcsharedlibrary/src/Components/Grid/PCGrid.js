import React, { Fragment, useContext, useEffect } from 'react'
// import 'webix';
// import 'webix/webix.css';
//import webix from 'webix/webix.js';
import webix from 'webix/webix.min.js'
import '../../../node_modules/webix/webix.css'
import '../../../node_modules/webix/webix.min.css';
import { PcContext } from '../../store/PCStore';
import ScrollableTabsButtonAuto from '../ScrollableTabsButtonAuto';

const PCGrid = ({ config }) => {
  let count = 0 // for avoid multiple renders.
  const [pcContext, setPcContext] = useContext(PcContext);

  useEffect(() => {
    if (count === 0) {
      webix.ui({
        container: config.id,
        view: 'datatable',
        columns: config.columns,
        data: config.data || [], 
        id : config.id,
        //height : config.height || 500,
         //width : config.width || 800,
        //autowidth : true,
        autoheight: true,
        scrollX: true, 
        scrollY: true,
        //minHeight : 300,
        // maxHeight : 500
      })
    }
    count++
    return () => {
      // Destroy the Webix grid to prevent memory leaks
      webix.UIManager.destructor()
    }
  }, []);
  // useEffect(() => {
  //   const grid = webix.$$(config.id);
  //   if (grid) {
  //     grid.define('width', pcContext.sideBarCollapsed ? 'auto' : '100%');
  //     grid.resize();
  //   }
  // }, [pcContext.sideBarCollapsed, config.id]);
  debugger
  return <Fragment>
    <ScrollableTabsButtonAuto/>
  </Fragment>
}

export default PCGrid
