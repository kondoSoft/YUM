import React , {Component} from 'react'
import styled from 'styled-components/native'
import {
  ViewHeader,
  PreviewFood,
  IconEdit,
  MainContainer,
} from '../../components'
import {
  ContainerTop,
  ContainerTopUp,
  ContainerTopDown,
  ContainerTopleft,
  ContainerTopRight,
  ContainerBottom,
  ScrollContent,
} from '../../components/restaurantMenuComponents'

class Menu extends Component {
  render(){
    const {navigate} = this.props.navigation
    return (
      <MainContainer>
        <ContainerTop>
          {/* <ContainerTopUp>
            <ContainerTopleft></ContainerTopleft>
            <ContainerTopRight>
              <IconEdit
                name  =  'search'
                size = {25}
              />
              <IconEdit
                name  =  'shopping-bag'
                size = {25}
              />
            </ContainerTopRight>
          </ContainerTopUp> */}
          <ContainerTopDown>
            <ViewHeader onPress={() => navigate('Restaurant')}/>
          </ContainerTopDown>
          </ContainerTop>
        <ContainerBottom>
          <ScrollContent>
            <PreviewFood/>
            <PreviewFood/>
            <PreviewFood/>
            <PreviewFood/>
            <PreviewFood/>
          </ScrollContent>
        </ContainerBottom>
      </MainContainer>
    )
  }
}

 export default Menu
