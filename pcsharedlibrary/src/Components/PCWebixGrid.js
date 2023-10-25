import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import webix from 'webix/webix.min.js'
import '../../node_modules/webix/webix.css'
import '../../node_modules/webix/webix.min.css'
import { PcContext } from '../store/PCStore'

const PCWebixGrid = ({ columns, data, config, theme }) => {
  const webixWidgetRef = useRef(null)
  const [pcContext, setPcContext] = useContext(PcContext);
  const grid = {
    view: config.view || 'datatable',
    id: `${'grid' + Math.floor(Math.random() * Date.now()).toString(36)}`,
    columns: config.columns || [],
    autoheight:  true,
    scrollX: true,
    scrollY: true,
    css: 'PCWebixGrid'
  }
  const screenHeight = window.innerHeight;
  const gridHeight = screenHeight ;
  if (config && config.hasOwnProperty('id')) {
    grid.id = config.id
  }
  if (config && config.hasOwnProperty('css')) {
    grid.css = config.css
  }
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
    ui.$$(grid.id).parse(config.data)
    ui.$$(grid.id).define('width', webixContainer.offsetWidth - gridWidth)
    ui.$$(grid.id).define('height', gridHeight); // Set the grid height
    ui.$$(grid.id).resize()

    return () => {
      ui.destructor()
    }
  }, [columns, data, pcContext.sideBarCollapsed])

  return <div ref={webixWidgetRef} id={grid.id} />
}

export default PCWebixGrid
