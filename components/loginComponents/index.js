import styled from 'styled-components/native'

const UpContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1.4;
`
const CenterContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
`
const DownContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`
const Img = styled.Image`
  width: 100%;
  height: 100%;
`
const UpText = styled.Text`
  font-size: 13px;
  color: ${(props) => props.color};
  width: 100%;
`
const TextContainer = styled.View`
  width: 90%;
  padding-left: 15px;
  margin-bottom: -10px;
`
const InputContainer = styled.View`
  flex: 1;
  width: 90%;
  max-height: 60px;

`
const Logo = styled.Image`
  width: 100px;
  height: 100px;
`
export {
  UpContainer,
  CenterContainer,
  DownContainer,
  Img,
  UpText,
  TextContainer,
  InputContainer,
  Logo
}
