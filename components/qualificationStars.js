import styled from 'styled-components/native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Iconcontainer = styled.View`
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
const stars =(q) =>{
  let NumberStars = parseFloat(q)
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
    if (NumberStars > i) {
      array.push(stars)
    }
    else {
      if (NumberStars % 1 != 0 && half== 0) {
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
  var Uniquestar =
  (<Icon
      name = 'star-o'
      color = {'rgb(255,155,37)'}
      size = {25}
    />
  )
  var TextStar = (
    <SideText>{props.qualification}</SideText>
  )
  array2.push(Uniquestar)
  array2.push(TextStar)
  return array2
}

const StarIcon = (props) => (
  <Iconcontainer>
    {props.single ?
      OneStar(props)
      :
      stars(props.qualification)
    }
  </Iconcontainer>
)

 export default StarIcon
