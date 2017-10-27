import styled from 'styled-components/native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = styled.Text`
  color: #fff;
  text-align: center;
  height: 35px;
  padding-top: 5px;
  flex: 2;
  font-size: 20px;
`
const Container = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background-color:  rgba(0,0,0,.01);
  border-radius: 15px;
  border-color: #fff;
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 10px;
  padding: 2px;
  align-items: baseline;
`
const Iconcontainer = styled.View`
  flex: 1;
  display: ${props => props.Icon ? 'flex':'none'};
  align-items: center;
`

const SecondaryButton = (props) => (
  <Container flex={props.flex} accessibilityComponentType='button'>
    <Iconcontainer Icon={props.Icon}>
      <Icon name={props.Icon} color='#fff' size={28}/>
    </Iconcontainer>
    <Button>{props.text}</Button>
  </Container>
)
export default SecondaryButton
