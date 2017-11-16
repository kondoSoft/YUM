import styled from 'styled-components/native'

const HomeContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
  width: 100%;
  align-items: center;
`
const BackgroundImage = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`
const UpContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
`
const DownContainer = styled.View`
  flex:2;
  width: 100%;
`
const DownSubContainerUp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const DownSubContainerDown = styled.View`
  flex: 3;
  flex-direction: row;
`
const LeftContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const RightContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const WhiteText = styled.Text`
  color: #fff;
  text-align: center;
`
const Logo = styled.Image`
  width: 120px;
  height: 120px;
`
export{
  HomeContainer,
  BackgroundImage,
  UpContainer,
  DownContainer,
  DownSubContainerUp,
  DownSubContainerDown,
  LeftContainer,
  RightContainer,
  WhiteText,
  Logo,
}
