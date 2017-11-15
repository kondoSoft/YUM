import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Star = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const MainContainer = styled.View`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`
const Stars = (action,qualification) => {
  var funcion = action
  var numberStars = qualification

  var array = []
  for (var i = 1; i < 6; i++) {
    let index = i
    if (numberStars < i) {
      var starsDefault = (
      <Star onPress = {()=>funcion(index)} >
        <Icon
          name = 'star-o'
          color = {'rgb(255,155,37)'}
          size = {35}
        />
      </Star>
      )
      array.push(starsDefault)
    }
    else {
      var stars =  (
        <Star onPress = {()=>funcion(index)} >
          <Icon
            name = 'star'
            color = {'rgb(255,155,37)'}
            size = {35}
          />
        </Star>
      )
      array.push(stars)
    }
  }

  return (array)
}

const TouchableStars = (props) =>(
  <MainContainer>
    {Stars(props.action, props.qualification)}
  </MainContainer>

)

export default TouchableStars
