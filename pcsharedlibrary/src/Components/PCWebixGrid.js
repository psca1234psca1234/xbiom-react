import React, { useContext, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import webix from 'webix/webix.min.js'
import '../../node_modules/webix/webix.css'
import '../../node_modules/webix/webix.min.css'
import { PcContext } from '../store/PCStore'

const PCWebixGrid = ({ columns, data, config, theme }) => {
  debugger
  const webixWidgetRef = useRef(null)
  const [pcContext, setPcContext] = useContext(PcContext);
  const grid = {
    view:'datatable',
    id: `${'grid' + Math.floor(Math.random() * Date.now()).toString(36)}`,
    columns: columns,
    autoheight:  true,
    scrollX: true,
    scrollY: true,
    css: 'PCWebixGrid',
    editable:true,
    
  }
  const screenHeight = window.innerHeight;
  const gridHeight = screenHeight ;
  if (config && config.hasOwnProperty('id')) {
    grid.id = config.id
  }
  if (config && config.hasOwnProperty('css')) {
    grid.css = config.css
  }
  const columnClick = (id) => {
    // Customize the click event logic here
    console.log(`Column clicked: ${id}`);
  };
  useEffect(() => {
    const webixContainer = ReactDOM.findDOMNode(webixWidgetRef.current)
    let gridWidth = pcContext.sideBarCollapsed
      ? pcContext.sideBarCollapsedWidth + 20
      : pcContext.sideBarWidth + 20
    const ui = webix.ui({
      cols: [grid],
      isolate: true,
      container: webixContainer
    })
   
    ui.$$(grid.id).parse(data)
    debugger
    ui.$$(grid.id).define('width', webixContainer.offsetWidth - 75)
    ui.$$(grid.id).define('height', '70vh'); // Set the grid height
    ui.$$(grid.id).resize()

    ui.$$(grid.id).attachEvent('onClick', (id, e, node) => {
      debugger
      const columnId = id.column;
      if (columnId === 'name') {
        const rowId = id.row;
        const rowData = ui.$$(grid.id).getItem(rowId);
        const link = rowData.name; // Use the column data to construct the link
        window.open(link, '_blank'); // Open the link in a new tab
        // You can also call the custom columnClick function if needed
        columnClick(rowId);
      }
    });
    return () => {
      ui.destructor()
    }
  }, [columns, data, pcContext.sideBarCollapsed])

  return <div ref={webixWidgetRef} id={grid.id} />
}

export default PCWebixGrid
