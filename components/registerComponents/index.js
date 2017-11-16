import styled from 'styled-components/native'

const UpContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`
const CenterContainer = styled.View`
  padding: 15px;
  justify-content: center;
  flex: 4;
`
const DownContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`
const Img = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`
const Logo = styled.Image `
  height: 60px;
  width: 60px;
`
export {
  UpContainer,
  CenterContainer,
  DownContainer,
  Img,
  Logo,
}
