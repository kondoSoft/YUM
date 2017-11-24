import styled from 'styled-components/native'

const TopContainer = styled.View`
  flex: 2;
`
const BottomContainer = styled.View`
  flex: 3;
  margin: 0 10px 0 10px;
`
const BottomContainerUp = styled.View`
  flex: 1;
`
const BottomContainerCenter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const BottomContainerDown = styled.View`
  flex: 3;
  justify-content: center;
`
const Img = styled.Image`
  width: 100%;
  height: 100%;
`
const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const TitleText = styled.Text`
  font-size: 22px;
`
const OrangeText = styled.Text`
  font-size: 12px;
  color: #ff5722;
`
const OrangeTextContainer = styled.View`
  height: 15px;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
`
const TextGray = styled.Text`
  color: #757575;
  font-size: 12px;
`
const LocationContainer = styled.View`
  flex: 1;
  flex-direction: row;
`
const TextContainer = styled.View`
  flex: 5;
  flex-direction: row;
  align-items: center;
`
const LineContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 30px;
`
const SocialsContainer = styled.View`
  flex: 1;
  margin: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 50px 0 50px;
`
const StickContainer = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
const Touch = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export {
  TopContainer,
  BottomContainer,
  BottomContainerUp,
  BottomContainerCenter,
  BottomContainerDown,
  Img,
  TitleContainer,
  TitleText,
  OrangeText,
  OrangeTextContainer,
  TextGray,
  TextContainer,
  LocationContainer,
  LineContainer,
  SocialsContainer,
  StickContainer,
  Touch
}
