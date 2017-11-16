import styled from 'styled-components/native'

const TopContainer = styled.View`
  flex: 1;
  border-style: solid;
  border-bottom-color: rgba(131,131,131,0.25);
  border-bottom-width: 2px;
`
const BottomContainer = styled.View`
  flex: 1;
`
const TopContainerUp = styled.View`
  height: 15%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-style: solid;
  border-bottom-color: rgba(131,131,131,0.25);
  border-bottom-width: 2px;
`
const TopContainerDown = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 85%;
`
const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`
const Title = styled.Text`
  font-size: 25px;
  text-align: left;
  margin: 5px 0 10px 0;
`
const Operations = styled.View`
  flex: 1;
  border-style: solid;
  border-bottom-color: rgb(255,87,34);
  border-bottom-width: 2px;
  padding-bottom: 15px;
`
const LineContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 10px 0 10px;
`
const LineContainerLeft = styled.View`
  flex: 1;
  align-items: flex-start;
`
const LineContainerRight = styled.View`
  flex: 1;
  align-items: flex-end;
`
const TextGray = styled.Text`
  font-size: 12px;
  color: rgb(131,131,131);
  margin: 5px 0 2px 0;
`
const TextBlack = styled.Text`
  font-size: 15px;
  margin: 5px 0 5px 0;
`
const TotalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 5px;
  border-style: solid;
  border-bottom-color: rgb(255,87,34);
  border-bottom-width: 2px;
  margin-bottom: 25px;
`
const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export {  TopContainer,
  BottomContainer,
  TopContainerUp,
  TopContainerDown,
  ScrollContainer,
  Title,
  Operations,
  LineContainer,
  LineContainerLeft,
  LineContainerRight,
  TextGray,
  TextBlack,
  TotalContainer,
  ButtonContainer,}
