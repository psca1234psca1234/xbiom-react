export const HeaderDataConvert = (xmlData)=>{
    const result = Array.from(xmlData.getElementsByTagName('COL')).map((colNode, index) => {
        const title = colNode.getAttribute('Title');
        if (title) {
            return {
                id: title,
                header: title,
                width: colNode.getAttribute('WIDTH')
            };
        }
        // Return null or an empty object as per your preference for filtering
        return null;
    }).filter(item => item !== null); // Filtering out null entries if required
    
return result
}

export const RowDataConverter = (xmlData)=>{
    // const result = Array.from(xmlData.getElementsByTagName('Form')).map((formNode,index) => {
    //     return {
    //         name: formNode.getAttribute('IDENTIFIER'),
    //     }
    // })

}

export const CTHeaderConverter = (xmlDoc) => {
    const headers = Array.from(xmlDoc.getElementsByTagName("HEADER")[0].getElementsByTagName("I"));
    const columns = headers.map(column => {
        var isHidden= column.getAttribute("HIDDEN") == 'false'
if(isHidden){
    return {
        id: column.getAttribute("DATAINDEX"),
        header: column.getAttribute("TEXT"),
        fillspace: parseInt(column.getAttribute("FLEX")),
        width: parseInt(column.getAttribute("WIDTH")),
        // hidden : column.getAttribute("HIDDEN"),
        // Add other properties as needed based on your grid configuration
    };
}
return null

    }).filter(column => column !== null);   
return columns;
}
export const CTDataConverter =(xmlDoc) => {
    const data = Array.from(xmlDoc.getElementsByTagName("DATA")[0].getElementsByTagName("I"));
    const gridData = data.map(item => {
        const rowData = {};
        Array.from(item.attributes).forEach(attr => {
            rowData[attr.name] = attr.value;
        });
        return rowData;
    });
    return gridData;
}
