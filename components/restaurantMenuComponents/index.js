import styled from 'styled-components/native'

const ContainerTop = styled.View`
  flex: 2;
  align-items: center;
  justify-content: flex-end;
`
const ContainerTopUp = styled.View`
  height: 30%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-color: rgb(131,131,131);
  border-bottom-width: 2px;
`
const ContainerTopDown = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 70%;
`
const ContainerTopleft = styled.View`
  flex: 1;
`
const ContainerTopRight = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`
const ContainerBottom = styled.ScrollView`
  flex: 4;
`
const ScrollContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export{
  ContainerTop,
  ContainerTopUp,
  ContainerTopDown,
  ContainerTopleft,
  ContainerTopRight,
  ContainerBottom,
  ScrollContent,
}
