import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: ${(props) => (props.w ? props.w : '100%')};

  .sidebar {
    & .MuiPaper-root{
      //  background-color: #1F73D8 !important;
       background-color: #fff !important;

    }
  }

  .collapsedSidebar {
    & .MuiPaper-root{
      //  background-color: #1F73D8 !important;
       background-color: #fff !important;

    }
  }
  .listClass{
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .listitemsclass {
    // padding-left: 0px !important;
    padding-right: 0px !important;
    height: 30px !important;
    &:hover{
      background-color: #f1f1f1 !important;
    }
    // &.MuiButtonBase-root-MuiListItemButton-root{
    //   &:hover {
    
    //     background-color :'transparent'
        
    //     }
    //   }
  }
  .listItemIconClass{
    >i {
      padding-left: 2px important;
    }
  }

  .subitemsClass{
    padding-top: 0px !important;
    padding-bottom : 0px !important;
  }

  .listItemButtonclass{
    height : 30px !important;
    margin-left: -15px;
    &:hover{
      background-color: transparent !important;
    }
  }
  
  

  .listItemTextttt {
    margin-left : -30px !important;
    // color:#7e7e7e;
    padding-left: 2px;
    letter-spacing: 0.00938em;
    display: block;

    & .MuiTypography-root{
      font-family: Roboto, Helvetica, Arial, sans-serif !important;
      font-weight: 500 !important;
      // line-height: 1.5 !important;
      font-size: 12px !important;
      display : block
    }
    &: hover {
      color:blue !important
    }
    
  }
`
export const  sidebartext = styled.div`
.listItemTextttt {
  color : ${(props) => ((props.active ==1) ? '#000' : '#7e7e7e')};
}
`