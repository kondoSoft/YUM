import styled from 'styled-components/native'

const TextContainer = styled.View`
width: 95%;
height: 50px;
display: flex;
flex-direction: row;
padding: 0 10px 0 10px;
border-style: solid;
border-bottom-color: #ff5722;
border-bottom-width: 1px;
padding-bottom: 10px;
margin: 0 10px 0 10px;
`
const RawText = styled.Text`
  font-size: 22px;
`
export {
  TextContainer,
  RawText,
}
