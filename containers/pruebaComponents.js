import React from 'react'
import styled from 'styled-components/native'
import {
  PreviewRestaurant,
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
     <PreviewRestaurant/>
   </Container>
 )
export default Prueba
