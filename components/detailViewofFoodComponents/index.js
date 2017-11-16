import styled from 'styled-components/native'

const TopContainer = styled.View`
  flex: 2;
`
const TopContainerUp = styled.View`
  flex: 1;
  padding: 10px;
  border-style: solid;
  border-bottom-color: rgb(131,131,131);
  border-bottom-width: 2px;
`
const TopContainerDown =  styled.View`
  flex: 4;
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
  justify-content: space-between;
  align-items: center;
`
const BottomContainerDown = styled.View`
  flex: 3;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
`
const FoodImage = styled.Image`
  width: 100%;
  height: 100%;
`
const StyledText = styled.Text`
  font-size: 25px;
  border-style: solid;
  border-bottom-color: rgb(255,87,34);
  border-bottom-width: 2px;
`
const Price = styled.Text`
  font-size: 25px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  text-align: right;
  margin-top: 5px;
`
const FoodDetail = styled.Text`
  font-size: 15px;
  text-align: justify;
  margin: 5px 0 10px 0;
`
export {
  TopContainer,
  TopContainerUp,
  TopContainerDown,
  BottomContainer,
  BottomContainerUp,
  BottomContainerCenter,
  BottomContainerDown,
  FoodImage,
  StyledText,
  Price,
  FoodDetail,
}
