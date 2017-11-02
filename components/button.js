import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  flex: 3;
  text-align: center;
`
const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${ (props) => props.Icon ? 'space-between' : 'center' };
  background: rgb(255,87,34);
  border-radius: 15px;
  color: #fff;
  text-align: center;
  width: 95%;
  height: 40px;
  margin-top: 10px;
`
const Iconcontainer = styled.View`
  flex: 1;
  display: ${props => props.Icon ? 'flex':'none'};
  align-items: center;
`
const Button = (props) => (
  <Container Icon={props.Icon} >
    <Iconcontainer Icon={props.Icon}>
      <Icon name={props.Icon}  color={'#fff'} size={28}/>
    </Iconcontainer>
    <Text>{props.text}</Text>
  </Container>
)
export default Button
