import styled from 'styled-components/native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Platform} from 'react-native'


const Container = styled.View`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-width: 1px;
  border-radius: 15px;
  border-color: rgb(255,87,34);
  background-color: #fff;
  padding: 5px;
`
const Iconcontainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`
const SearchText = styled.TextInput`
  color: rgb(131,131,131);
  flex: 5;
  padding-left: 4px;
  ${()=> {if (Platform.OS == 'ios') {
    return `
      border-bottom-width: 1px;
      border-color: #FF5722;
    `
      }
    }
  }
`
const SearchInput = (props) => (
  <Container style={props.style}>
    <SearchText
      value={props.text}
      onChangeText={(text) => props.change(text)}
      placeholder={props.placeholder}
      underlineColorAndroid = {'transparent'}
    />
    <Iconcontainer>
      <Icon
        name='search'
        color={'rgb(255,87,34)'}
        size={28} />
    </Iconcontainer>
  </Container>

)
export default SearchInput
