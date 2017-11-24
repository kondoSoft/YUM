import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  StatusBar,
  Platform,
  Modal,
} from 'react-native'
import {
  SecondaryButton,
  IconEdit,
  PreviewRestaurant,
  MainContainer
} from '../../components'
import {
  TopContainer,
  BottomContainer,
  ScrollContent,
  TopContainerUp,
  TopContainerUpLeft,
  TopContainerUpRight,
  TopContainerDown,
  ViewOpacity,
  ModalView,
  ModalTouch,
  ModalText,
  ModalContent
} from '../../components/restaurantListComponents'

class RestaurantList extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render () {
    const {navigate} = this.props.navigation
    return (
      <MainContainer>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {Alert.alert("Modal has been closed.")}}
          >
          <ViewOpacity></ViewOpacity>
          <ModalView>
            <ModalContent>
              <ModalTouch onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                <ModalText>MAS CERCANOS</ModalText>
              </ModalTouch>
              <ModalTouch onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                <ModalText>MEJOR PRECIO</ModalText>
              </ModalTouch>
              <ModalTouch onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                <ModalText>MEJOR PUNTUACION</ModalText>
              </ModalTouch>
            </ModalContent>
          </ModalView>
       </Modal>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <TopContainer>
          <TopContainerDown>
            <SecondaryButton
              width='50%'
              text='MÁS CERCANOS'
              acolor='rgb(255,87,34)'
              onPress={() => {this.setModalVisible(true)}}
            />
          </TopContainerDown>
        </TopContainer>
        <BottomContainer>
          <ScrollContent>
            <PreviewRestaurant onPress={() => navigate('Menu')} />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
          </ScrollContent>
        </BottomContainer>
      </MainContainer>
    )
  }
}

export default RestaurantList
