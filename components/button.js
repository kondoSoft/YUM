import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  flex: ${(props) => props.IconSide ? 2 : 3};
  padding-left: ${(props) => props.IconSide ? '90px' : 0};
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
const IconSidecontainer = styled.View`
  padding-right: 75px;
  display: ${props => props.IconSide ? 'flex':'none'};
  justify-content: center;
  flex: ${(props) => props.text ? '' :4}
`
const Button = (props) => (
  <Container Icon={props.Icon} >
    <Iconcontainer Icon={props.Icon}>
      <Icon name={props.Icon}  color={'#fff'} size={28}/>
    </Iconcontainer>
    <Text IconSide={props.IconSide} >{props.text}</Text>
    <IconSidecontainer text={props.text} IconSide={props.IconSide}>
      <Icon name={props.IconSide}  color={'#fff'} size={28}/>
    </IconSidecontainer>
  </Container>
)
export default Button
