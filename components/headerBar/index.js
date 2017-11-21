import styled from 'styled-components/native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderRight = styled.View`
  width: 150px;
  flex-direction: row;
  justify-content: space-around;
`
const IconButton = styled.TouchableOpacity`
  
`

export const HeaderRightButtons = (props) => {
  return (
    <HeaderRight>
      <IconButton>
        <Icon name='md-locate' size={25} color={'#FFF'} />
      </IconButton>
      <IconButton>
        <Icon name='ios-search' size={25} color={'#FFF'} />
      </IconButton>
    </HeaderRight>
  )
}

export const HeaderRigthBag = (props) => {
  return (
    <HeaderRight>
      <IconButton>
        <Icon name='ios-search' size={25} color={'#FFF'} />
      </IconButton>
      <IconButton>
        <Icon name='ios-cart' size={25} color={'#FFF'} />
      </IconButton>
    </HeaderRight>
  )
}

export const HeaderRightRestaurant = (props) => {
  this.like = 'ios-heart-outline'
  this.color = '#FFF'
  return (
    <HeaderRight>
      <IconButton onPress={() => {
        if (this.like === 'ios-heart-outline' && this.color === '#FFF') {
          console.log('like')
          this.like = 'ios-heart'
          this.color = 'red'
        } else {
          console.log('dislike')
          this.like = 'ios-heart-outline'
          this.color = '#FFF'
        }
      }}>
        <Icon name={this.like} size={25} color={this.color} />
      </IconButton>
      <IconButton>
        <Icon name='ios-cart' size={25} color={'#FFF'} />
      </IconButton>
    </HeaderRight>
  )
}
