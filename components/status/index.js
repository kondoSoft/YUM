import styled from 'styled-components/native'

export const ArrowDown = styled.TouchableOpacity`
    align-items: center;
    width: 100%;
`
export const RestaurantInfo = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 5px;
`
export const MotorcycleInfo = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 5px;
`
export const Image = styled.Image`
    flex: 1;
`
export const RestaurantData = styled.Text`
    flex: 2;
`
export const MotorcycleData = styled.View`
    flex: 2;
    justify-content: space-around;
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
`
export const StatusCheck = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 12px 5px;
    align-items: center;
`
export const Check = styled.View`
    flex: 1;
`
export const TextStatus = styled.View`
    flex: 3;
`
export const BottomView = styled.View`
  border: 1px solid black;
  align-items: center;
  background-color: #FFF;

  ${props => {
    if (props.height) {
      return `
            height: ${props.height};
          `
    }
  }}
`
