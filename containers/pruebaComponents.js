import React from 'react'
import styled from 'styled-components/native'
import {
  ViewHistorial,
} from '../components'

 const Container = styled.View`
   width: 100%;
   padding-top: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #fff;
 `
 const Prueba = (props) =>(
   <Container>
     <ViewHistorial/>
   </Container>
 )
export default Prueba
