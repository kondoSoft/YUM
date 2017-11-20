import styled from 'styled-components/native'

const TopContainer =  styled.View`
  flex: 1;
`
const BottomContainer =  styled.ScrollView`
  flex:  8;
`
const ScrollContent =  styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const TopContainerUp = styled.View`
  flex: 1;
  flex-direction: row;
  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(151,151,151 , 0.25);
`
const TopContainerUpLeft = styled.View`
  flex: 2;
`
const TopContainerUpRight = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end ;
  align-items: center;
`
const TopContainerDown =  styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-color: rgb(255,87,34);
  border-bottom-width: 2px;
  margin: 0 10px 0 10px;
`
export{
  TopContainer,
  BottomContainer,
  ScrollContent,
  TopContainerUp,
  TopContainerUpLeft,
  TopContainerUpRight,
  TopContainerDown,
}
