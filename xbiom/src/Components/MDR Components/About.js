import React, { useState, useEffect, useContext } from 'react';
import { PcContext } from "pcsharedlibrary";

function About() {
  const [mdrHomeContext] = useContext(PcContext);
  const [sidebarWidth, setSidebarWidth] = useState(mdrHomeContext.sideBarCollapsed ? mdrHomeContext.sideBarCollapsedWidth : mdrHomeContext.sideBarWidth);

  useEffect(() => {
    const width = mdrHomeContext.sideBarCollapsed ? mdrHomeContext.sideBarCollapsedWidth : mdrHomeContext.sideBarWidth;
    setSidebarWidth(width);
  }, [mdrHomeContext.sideBarWidth, mdrHomeContext.sideBarCollapsed, mdrHomeContext.sideBarCollapsedWidth]);

  return (
    <div style={{ marginLeft: sidebarWidth, marginTop: '10px' }}>
      About
      <p>sgsdggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
      {/* ... rest of the content */}
    </div>
  );
}

export default About;
