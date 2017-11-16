import styled from 'styled-components/native'

const BackgroundImage = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`
const CenterContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
`
const TopContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.Image`
  height: 80px;
  width: 80px;
`
const Text = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: 400;
`
const InputContainer = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
`
const TextGray = styled.Text`
  color: #757575;
  font-size: 12px;
  margin-left: 10px;
`
export{
  BackgroundImage,
  CenterContainer,
  TopContainer,
  BottomContainer,
  Logo,
  Text,
  InputContainer,
  TextGray,
}
