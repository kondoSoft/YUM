import styled from 'styled-components/native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconContainer = styled.View`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
`
const SideText =  styled.Text`
  font-size: 20px;
  padding: 0 1px 0 5px;
`
const Stars =(quantity) =>{
  let numberStars = parseFloat(quantity)
  var starsDefault =  (
    <Icon
      name = 'star-o'
      color = {'rgb(255,155,37)'}
      size = {15}
    />
  )
  var stars =  (
    <Icon
      name = 'star'
      color = {'rgb(255,155,37)'}
      size = {15}
    />
  )
  var halfStars =  (
    <Icon
      name = 'star-half-o'
      color = {'rgb(255,155,37)'}
      size = {15}
    />
  )
  var limit = 6;
  var half = 0;
  let array = []
  for (let i = 1; i < limit; i++) {
    if (numberStars > i) {
      array.push(stars)
    }
    else {
      if (numberStars % 1 != 0 && half== 0) {
        array.push(halfStars)
        half++
      }
      else {
        array.push(starsDefault)
      }
   }
  }
  return (array)
}

const OneStar = (props) => {
  var array2 = []
  var uniqueStar =
  (<Icon
      name = 'star-o'
      color = {'rgb(255,155,37)'}
      size = {25}
    />
  )
  var textStar = (
    <SideText>{props.qualification}</SideText>
  )
  array2.push(uniqueStar)
  array2.push(textStar)
  return array2
}

const StarIcon = (props) => (
  <IconContainer>
    {props.single ?
      OneStar(props)
      :
      Stars(props.qualification)
    }
  </IconContainer>
)

 export default StarIcon
