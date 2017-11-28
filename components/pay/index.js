import styled from 'styled-components/native'
import {Platform} from 'react-native'

export const ScreenContainer = styled.View`
    ${props => {
      if (props.height && props.width) {
        return `
              width: ${props.width}px;
              height: ${props.height};
            `
      }
    }}
    align-items: center;
    background-color: #FFF;
`
export const Total = styled.View`
  width: 90%;
  padding: 15px 0px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-color: #FA5900;
`
export const TotalText = styled.Text`
  font-size: ${props => props.size ? props.size : '18px'};
  ${props => {
    if (props.fontWeight) {
      return `font-weight: 800;`
    }
  }}
`

export const OptionPayment = styled.View`
  margin-top: 20px;
  width: 90%;
  padding: 15px 0px;
`
export const Label = styled.Text`
  font-size: ${props => props.size ? props.size : '14px'};
`
export const PaymentButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10;
  border-width: 2px;
  border-color: #FA5900;
  padding: 10px 15px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Pick = styled.Picker`
  width: 100%;
  height: 50px;
`
export const PickContainer = styled.View`
  width: 100%;
  ${'' /* border-radius: 10; */}
  border-width: 2px;
  border-color: #FA5900;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding-bottom: 3px;
`
export const CardNumberContainer = styled.View`
  width: 90%;
`
export const CardDetails = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
`
export const Detail = styled.View`
  width: 45%;
`
export const Input = styled.TextInput`
  margin-top: 10px;
  width: 100%;
  padding: 10px 15px 5px 15px;
  ${()=> {if (Platform.OS == 'ios') {
    return `
      border-bottom-width: 1px;
      border-bottom-color: #F5722;
    `
      }
    }
  }
`
export const PayButton = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
