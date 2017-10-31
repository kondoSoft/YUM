import styled from 'styled-components/native'
import React from 'react'

const Container =  styled.View`
  width: 95%;
  padding: 5px;
  background-color: transparent;
  border-radius: 35px;
  border-width: 1px;
  border-color: #fff;
  display: flex;
  justify-content: flex-start;
  border-color: rgb(255,87,34);
  align-items: center;
  flex-direction: row;
`
const Img = styled.Image`
  border-radius: 100;
  border-color: rgb(255,87,34);
  width: 50;
  height: 50;
`
const Teext = styled.Text`
  color: rgb(255,87,34);;
  font-size: 23px;
  padding-left: 10px;
`
const Status = () => (
  <Container>
    <Img source={require('../assets/img/status_button.png')} />
    <Teext>Pedido en camino </Teext>
  </Container>
)

export default Status
