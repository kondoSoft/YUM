import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  StatusBar,
  Platform
} from 'react-native'
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
  TopContainerCenter,
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

class Bag extends Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <ScrollContainer height='100%'>
        <MainContainer padding={10}>
          <StatusBar
            hidden={Platform !== 'ios'}
            backgroundColor='#ff5722'
            barStyle='light-content'
            setTranslucent
          />
          <TopContainer>
            <TopContainerUp>
              <Title>Pedido</Title>
            </TopContainerUp>
            <ScrollContainer height='100%'>
              <TopContainerCenter>
                <PreviewOrder />
                <PreviewOrder />
                <PreviewOrder />
                <PreviewOrder />
                <PreviewOrder />
                <PreviewOrder />
              </TopContainerCenter>
            </ScrollContainer>
            <TopContainerDown>
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
      // </ScrollContainer>
    )
  }
}

export default Bag
