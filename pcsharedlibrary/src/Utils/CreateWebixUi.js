import React,{useEffect,useRef} from 'react';
//import webix from 'webix/webix.js';
// import  webix from 'webix/webix.js';
// import '../../node_modules/webix/webix.css';
 import webix from 'webix/webix.min.js';
//import '../../../node_modules/webix/webix.css';
// import '../../../node_modules/webix/webix.min.css';

function CreateWebixUi({ uiConfig }) {
  const root = useRef(null);
  let uiInstance = null;

  useEffect(() => {
    // Initialize Webix UI when the component mounts
    uiInstance = webix.ui(uiConfig, root.current);

    return () => {
      // Cleanup the UI instance when the component unmounts
      if (uiInstance) {
        uiInstance.destructor();
      }
    };
  }, [uiConfig]);

  return <div ref={root}></div>;
}

export default CreateWebixUi;
