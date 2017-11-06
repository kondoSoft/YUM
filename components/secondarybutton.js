import styled from 'styled-components/native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Button = styled.Text`
  color: #fff;
  text-align: center;
  height: 35px;
  padding-top: 5px;
  flex: 3;
  font-size: 15px;
  color: ${props => props.acolor};
`
const Container = styled.TouchableOpacity`
  width: ${(props) => props.width ? props.width : '80%'};
  height: 40px;
  background-color:  transparent;
  border-radius: 15px;
  border-color: ${props => props.acolor};
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px;
`
const Iconcontainer = styled.View`
  flex: 1;
  display: ${props => props.Icon ? 'flex':'none'};
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`

const SecondaryButton = (props) => (
  <Container width={props.width} flex={props.flex}  acolor={props.acolor}>
    <Iconcontainer Icon={props.Icon}>
      <Icon name={props.Icon} color={props.acolor} size={20}/>
    </Iconcontainer>
    <Button acolor={props.acolor}>{props.text}</Button>
  </Container>
)
export default SecondaryButton
