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
const HeaderLeft = styled.View`
`
const HeaderLeftOrder = styled.Text`
  margin-left: 20;
  color: #FFF;
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
  const {navigate} = props
  return (
    <HeaderRight>
      <IconButton>
        <Icon name='ios-search' size={25} color={'#FFF'} />
      </IconButton>
      <IconButton onPress={() => navigate('Bag')}>
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
export const HeaderLeftStatus = (props) => {
  return (
    <HeaderLeft>
      <HeaderLeftOrder>Orden #6281</HeaderLeftOrder>
    </HeaderLeft>
  )
}

const HeaderMiddle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const HeaderTime = styled.Text`
  color: #FFF;
  font-size: 14px;
`
export const HeaderMiddleStatus = (props) => {
  return (
    <HeaderMiddle>
      <HeaderTime>
        <Icon name='md-alarm' size={20} color={'#FFF'} /> 25 min. aprox.
      </HeaderTime>
    </HeaderMiddle>
  )
}
const CancelButton = styled.TouchableOpacity`

`
const CancelText = styled.Text`
  color: #FFF;
`
export const HeaderRightStatus = (props) => {
  return (
    <HeaderLeft style={{marginRight: 20}}>
      <CancelButton>
        <CancelText>CANCELAR</CancelText>
      </CancelButton>
    </HeaderLeft>
  )
}
