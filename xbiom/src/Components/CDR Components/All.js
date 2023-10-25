import React from 'react'
import { Container, MainContainer } from '../../resources/css/MainStyle'
import { PCWebixGrid, ScrollableTabsButtonAuto, TabularGrid } from 'pcsharedlibrary'
import { columns, gridData } from '../../resources/data/sampleGridDatas';
import { tabButtons } from '../../resources/data/Constants';

function All() {
    const dummyConfig = {
        id: "webixContainer",
        data: gridData,
        columns: columns,
        //columns: cols,
        width: 800,
        height: 800,
    };


const handleTabButton= (action) => {
    console.log("handle button",action);
    if(action ==='refesh'){
        console.log(action)
    }else if(action == 'create model'){
        console.log(action);
    }
}

    return (
        <MainContainer>
            <Container cntname={"ws"}>
            <TabularGrid config={dummyConfig} tabButtons={tabButtons}/>              
            </Container>
        </MainContainer>
    )
}

export default All