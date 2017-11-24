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
const ModalView = styled.View`
  display: flex;
  align-items: center;
  z-index: 3;
  margin-top: 40px;
  width: 100%;
  height: 40%;
  border-radius: 20px;
`
const ModalTouch = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;

`
const ViewOpacity = styled.View`
  z-index: 2;
  background-color: rgba(0,0,0,0.45);
  width: 100%;
  height: 100%;
  position: absolute;
`
const ModalText = styled.Text`
    font-size: 14px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
`
const ModalContent = styled.View`
  justify-content: center;
  display: flex;
  width: 50%;
  background-color: #FFF;
  border-radius: 15px;
  height: 80%;
`
export{
  TopContainer,
  BottomContainer,
  ScrollContent,
  TopContainerUp,
  TopContainerUpLeft,
  TopContainerUpRight,
  TopContainerDown,
  ViewOpacity,
  ModalView,
  ModalTouch,
  ModalText,
  ModalContent
}
