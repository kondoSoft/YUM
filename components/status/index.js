import styled from 'styled-components/native'

export const ArrowDown = styled.TouchableOpacity`
    align-items: center;
    flex: ${props => props.flex ? props.flex : 1};
    width: 100%;
    z-index: 2;
    position: absolute;
`
export const RestaurantInfo = styled.View`
    width: 100%;
    flex-direction: row;
    flex: ${props => props.flex ? props.flex : 1};
    align-items: center;
`
export const MotorcycleInfo = styled.View`
    width: 100%;
    flex-direction: row;
    flex: ${props => props.flex ? props.flex : 1};
`
export const Image = styled.Image`
    flex: 1;
`
export const RestaurantData = styled.Text`
    flex: 2;
    padding-left: 5px;
`
export const MotorcycleData = styled.View`
    flex: 2;
    justify-content: space-around;
    padding-left: 5px;

`
export const PhoneMessage = styled.View`
    flex:1;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`
export const Motorcycle = styled.Text`
    font-size: 14px;
    color: #9B9E9E;
`
export const Hr = styled.View`
    width: 95%;
    height: 2px;
    background-color: ${props => props.color ? props.color : '#FF5722'};
`
export const StatusContainer = styled.View`
    width: 80%;
    flex: ${props => props.flex ? props.flex : 1};
    justify-content: space-around;
    align-items: center;
`
export const StatusCheck = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`
export const Check = styled.View`
    flex: 1;
    overflow: hidden;
    align-items: center;
`
export const TextStatus = styled.View`
    flex: 3;
`
export const BottomView = styled.View`
  background-color: #FFF;
  width: 100%;
  align-items: center;
  ${props => {
    if (props.height) {
      return `
            height: ${props.height};
          `
    }
  }}
`
