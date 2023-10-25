import styled from "styled-components";

export const MainContainer = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  .sc-bdVaJa{
    width: 100% !important;
  }
  .sc-bdVaJa .sc-htpNat{
    padding: 0px !important;
    background-color: rgb(194, 207, 192) !important;
  }
  .active {
    font-weight: bold !important;
  }
  .webix_ss_hscroll{
    height: 6px !important;
  }
  

`;
export const Container = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  background-color: ${(props) => props.bgc ? props.bgc : ''};
  margin : ${(props) => props.margin ? props.margin : ''};
  border-radius : ${(props) => props.bRadius ? props.bRadius : ''};
  box-shadow: ${(props) => props.bShadow ? props.bShadow : '5px 5px 10px rgba(0, 0, 0, 0.2)'}
  .webix_cell:nth-child(even) {
    background-color: ${(props) => props.cntname === 'ws' ? '#c7ebd3' : props.cntname === 'as' ? '#cbcbcb' : "#cbcae4" } 
  }

`;
export const ContainerFRow = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  display: flex;
  flex-direction: row;
`;
export const ContainerFCol = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  display: flex;
  flex-direction: column;
`;
