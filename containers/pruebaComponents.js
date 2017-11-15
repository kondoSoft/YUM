import React from 'react'
import styled from 'styled-components/native'
import {
  Selector,
} from '../components'

 const Container = styled.View`
   width: 100%;
   padding-top: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   ${'' /* border: 2px solid black; */}
 `
 const Prueba = (props) =>(
   <Container>
     <Selector decrement = {props.decrement} order = {props.state.order}  increment = {props.increment}/>
   </Container>
 )
export default Prueba
