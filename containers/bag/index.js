import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  Add,
  PreviewOrder,
  Button,
  StyledInput,
  MainContainer
} from '../../components'
import {
  TopContainer,
  BottomContainer,
  TopContainerUp,
  TopContainerDown,
  ScrollContainer,
  Title,
  Operations,
  LineContainer,
  LineContainerLeft,
  LineContainerRight,
  TextGray,
  TextBlack,
  TotalContainer,
  ButtonContainer
} from '../../components/bagComponents'
import {
  StatusBar
} from 'react-native'

class Bag extends Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <ScrollContainer>
        <StatusBar
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <MainContainer padding={10}>
          <TopContainer>
            <TopContainerDown>
              <Title>Pedido</Title>
              <PreviewOrder />
              <PreviewOrder />
              <PreviewOrder />
              <Add />
            </TopContainerDown>
          </TopContainer>
          <BottomContainer>
            <Operations>
              <LineContainer>
                <LineContainerLeft>
                  <TextBlack>SUBTOTAL</TextBlack>
                  <TextGray>IVA</TextGray>
                  <TextGray>ENVIO</TextGray>
                  <TextGray>Propina</TextGray>
                </LineContainerLeft>
                <LineContainerRight>
                  <TextBlack>$165.00</TextBlack>
                  <TextGray>$15.00</TextGray>
                  <TextGray>$55.00</TextGray>
                  <StyledInput withOutMargin />
                </LineContainerRight>
              </LineContainer>
            </Operations>
            <TotalContainer>
              <Title>TOTAL</Title>
              <Title>$255.00</Title>
            </TotalContainer>
            <ButtonContainer>
              <Button onPress={() => navigate('Pay')} text='CONTINUAR' />
            </ButtonContainer>
          </BottomContainer>
        </MainContainer>
      </ScrollContainer>
    )
  }
}

export default Bag
