import React from "react";
import { Grid} from "pcsharedlibrary";
import ConvertXmlButtonData from "./Data/ConvertXmlButtonData";


var col =[
  { id:"title",fillspace:true,header:"Film title" },
  { id:"year",fillspace:true, header:"Released", width:100 },
  { id:"votes",fillspace:true, header:"Votes", width:100 },
  { id:"rating",fillspace:true, header:"Rating", width:100 },
]
var data =[
  { title:"The Shawshank Redemption" , year:1994, votes:678790, rating:9.2},
  { title:"The Godfather",fillspace:true, year:1972, votes:511495, rating:9.2},
  { title:"The Godfather: Part II", fillspace:true,year:1974, votes:319352, rating:9.0},
  { title:"The Good, the Bad and the Ugly", fillspace:true,year:19 , votes:213030, rating:8.9}, { title:"The Shawshank Redemption" , year:1994, votes:678790, rating:9.2},
  { title:"The Godfather",fillspace:true, year:1972, votes:511495, rating:9.2},
  { title:"The Godfather: Part II", fillspace:true,year:1974, votes:319352, rating:9.0},
  
  ]
// function getUI(){
//     return {
//     view:"text", 
//     scroll:false, 
//     width:400, 
//     autoheight:true,
//      select:true,
//      columns:col,
//      data:data
//     };
//   }
  var configuration ={editable: true}

// var sideBarData = [
//   {
//       id:1,
//       value:'item1',
//       data:[
//           {
//               id:11,
//               value:'item11'
//           },
//           {
//               id:12,
//              value:'item12'
//           },
//       ],
//   },
//   {
//       id:2,
//       value:'item2'
//   },
//   {
//       id:3,
//       value:'item3'
//   },
// ]
 
// var tabbarData = {
//     view:"tabbar", type:"bottom", multiview:true, options: [
//       { value: "Tabbb 1", id: 'Tab 1' },
//       { value: "Tabbbbbbb 2", id: 'Tab 2' },
//       { value: "Tab 3", id: 'Tab 3' },
//       { value: "Tabbbbbb 4", id: 'Tab 4' },
//       { value: "Tabb 5", id: 'Tab 5' },
//       { value: "Tab 6", id: 'Tab 6' },
//       { value: "Tabbbbbbbccccccccccccccccccccccccccccbbbbbb 7", id: 'Tab 7' },
//       { value: "Tab 8", id: 'Tab 8' },
//       { value: "Tab 9", id: 'Tab 9' },
//       { value: "Tabbb 10", id: 'Tab 10' },
//       { value: "Tab 11", id: 'Tab 11' },
//       { value: "Tabbb 12", id: 'Tab 12' },
//     ], tabMinWidth: 120, // Minimum width of each tab
//     scroll: "y", // Enable horizontal scrolling
//     tabOffset: 5, // Adjust tab offset
//     tabMargin: 10, // Adjust tab margin
//     height: 50,
//   };
  // var cellData = {
  //   cells:[
  //     {
  //       id:"Tab 1",
  //       view:"list",
  //       template:"#title#",
  //       type:{
  //         height:70
  //       },
  //       select:true,
  //       data:data
  //     },
  //     {
  //       id:"Tab 2",
  //       view : "list",
  //       template:"#votes#",
  //       data:data

  //     },
  //     {
  //       id:"Tab 3",
  //       view : "datatable",
  //       columns: col,
  //       data: data,      
  //     }
  //   ]
  // };
  const buttonNames = ["One", "Two", "Three","four"];
  const buttonNamees2 = <ConvertXmlButtonData/>
function Home() {
  return(
    <>
     {/* <SideBar  menuData={sideBarData}/> */}
     {/* <TabPanel tabbar={tabbarData} data={cellData}/> */}
    <Grid columns={col} data={data}  config={configuration} tabButtons={buttonNames}></Grid>
    {/* <ExampleComponent/> */}
    {/* <Grid/> */}
    

    </>
  ) 
  
  
  
}



export default Home;