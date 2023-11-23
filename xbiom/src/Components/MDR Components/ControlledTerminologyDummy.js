import React, { useEffect } from 'react'
import { CTContainer, Container, MainContainer } from '../../resources/css/MainStyle'
import { CustomBreadcrumbs, PCGrid, PCWebixGrid, ScrollableTab, TimeLines } from 'pcsharedlibrary'
import { Box } from '@mui/material';
import { Label } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { columns, gridData } from '../../resources/data/sampleGridDatas';

function ControlledTerminology(gridCol,dataa) {
    const location = useLocation();
    debugger
    var col= gridCol.gridCol;
    const tabData = [
        {
            tabName: 'Global',
            tabContent:<PCWebixGrid columns ={col} data={gridCol.dataa}/>
            ,
        },
        {
            tabName: 'Standard - CDISC',
            tabContent: <TimeLines contentList={gridCol.dataa}></TimeLines>
            ,
        },
        {
            tabName: 'Model CT',
            tabContent:<PCWebixGrid columns ={col} data={gridCol.dataa}/>
            ,
        },
        {
            tabName: 'Local',
            tabContent:<PCWebixGrid columns ={col} data={gridCol.dataa}/>
            ,
        },
    ];
    const dummyConfig = {
        id: "showInvolvedGridContainer",
        data: gridData,
        columns: columns,
        //columns: cols,
        width: 800,
        height: 800,
      };
      debugger
      console.log("CT",gridCol);
    return (

        <CTContainer width="100%" height="500px">
            <CustomBreadcrumbs></CustomBreadcrumbs>
            <ScrollableTab tabData={tabData} />

        </CTContainer>
    )
}

export default ControlledTerminology