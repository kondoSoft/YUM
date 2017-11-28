import styled from 'styled-components/native'
import {Platform} from 'react-native'

export const EditUserInfo = styled.View`
    width: 90%;
    margin-top: 20px;
`
export const EditForm = styled.View`
    width: 100%;
    margin-bottom: 20px;
`
export const EditLabel = styled.Text`
    font-size: 12px;
    color: #FF5722;
`
export const EditInput = styled.TextInput`
    width: 100%;
    padding: 5px 0px;
    ${()=> {if (Platform.OS == 'ios') {
      return `
        border-bottom-width: 1px;
        border-color: #FF5722;
      `
        }
      }
    }
`
export const SaveButton = styled.View`
    width: 100%;
    margin-top: 20px;
    align-items: center;
`
