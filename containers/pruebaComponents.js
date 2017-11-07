import React from 'react'
import styled from 'styled-components/native'
import {
  PreviewFood,
} from '../components'

 const Container = styled.View`
   width: 100%;
   padding-top: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   ${'' /* border: 2px solid black; */}
 `
 const Prueba = () =>(
   <Container>
     <PreviewFood />
   </Container>
 )
export default Prueba
