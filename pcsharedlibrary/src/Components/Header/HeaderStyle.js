import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  width: 100%;
  .sideBarClosableIcon{
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
  }
`
export const HeaderBar = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0866c6;
  color: white;
  width: 100%;
`

export const LeftSideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const RightSideContainer = styled.div`
  /* width: 100%; */
  /* background-color: red; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const ImageContainer = styled.div`
  /* width: 100%; */
  height: 100%;
`
export const PCLogo = styled.img`
  width: 200px;
  object-fit: cover;
`
export const LogoLink = styled.a``
export const HeaderButton = styled.button`
  background-color: ${(props) => (props.clicked ? 'green' : 'red')};
`

export const HeaderButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 130px;
  height: 30px;
`
export const HeaderButtonChild = styled.button`
  width: 60px;
  height: 100%;
  background-color: ${(props) => (props.is_active == 'true' ? 'green' : '')};
  color: ${(props) => (props.is_active == 'true' ? 'white' : 'black')};
  cursor: pointer;
  border: none;
  &:hover {
    background-color: lightgray;
    color: white;
  }

`
export const LabelContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin-right: 15px;
`
export const Label = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`
