import React, { useEffect, useState } from 'react'
import { Container } from '../../resources/css/MainStyle'
import { PCWebixGrid } from 'pcsharedlibrary'
import { fetchData } from '../../Controller/PCapiFetch'
import { ConstantUrl } from '../../resources/data/DataUrl'
import { HeaderDataConvert, RowDataConverter } from '../../Controller/DataConverter'
import { columns, gridData } from '../../resources/data/sampleGridDatas'

function DataIngestion() {
  document.cookie = 'H=S=e85d4ce0-21a7-4df7-8eb3-f39e6a1cad04';
  const [colData, setColData] = useState({});
  const [gridColumns, setGridColumns] = useState([]); // State to store grid columns

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const rawData = await fetchData(ConstantUrl.NSWAllStage);
        const parser = new DOMParser();
        const xmlDocument = parser.parseFromString(rawData, 'text/xml');
        console.log(xmlDocument);
        const gridCol = HeaderDataConvert(xmlDocument);

        const data = RowDataConverter(xmlDocument);

        setColData(gridCol);
        setGridColumns(gridCol.columns); // Set the columns for the grid
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndSetData();
  }, []);

  const gridConfig = {
    id: "webixContainer",
    data: gridData, // Placeholder for grid data
    columns:colData || columns, // Use the state to set columns
    width: 800,
    height: 800,
  };

  return (
    <div>
      <Container cntname={"ws"}>
        <PCWebixGrid config={gridConfig} />
      </Container>
    </div>
  )
}

export default DataIngestion
