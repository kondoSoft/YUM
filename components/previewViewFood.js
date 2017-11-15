import React from 'react'
import styled from 'styled-components/native'
import {
  CircleImage,
  Description,
}
from './index'
const MainContainer = styled.TouchableOpacity`
  width: 95%;
  height: 90px;
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-bottom-color: rgba(131,131,131,0.25);
  border-bottom-width: 2px;
  justify-content: center;
  align-items: center;
`
const LeftContainer =  styled.View`
  flex: 1;
`
const RightContainer = styled.View`
  flex: 3;
  padding-left: 10px;
`
const PriceContainer = styled.View`
  flex: 1;
  justify-content: center;
`
const Price = styled.Text`
  font-size: 15px;
`
 const PreviewFood = () => (
   <MainContainer>
     <LeftContainer>
       <CircleImage
         source = {require('../assets/img/restaurant.jpg')}
       />
     </LeftContainer>
     <RightContainer>
        <Description
         titleColor = 'rgb(255,87,34)'
         titleText = 'Tostadas de pollo'
         descriptionText = 'Orden de 3 con lechuga, aguacate, cebolla morada y tomate.'
         width = '100%'
         height = '30px'
       />
       <PriceContainer>
          <Price>$50.00</Price>
       </PriceContainer>
     </RightContainer>
   </MainContainer>
 )
  export default PreviewFood
