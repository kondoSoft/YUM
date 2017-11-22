import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  Button,
  TouchableStars,
  StyledInput
} from '../../components'
import {
  BackgroundImage,
  CenterContainer,
  TopContainer,
  BottomContainer,
  Logo,
  Text,
  InputContainer,
  TextGray
} from '../../components/QualificationServiceComponents'
import {
  StatusBar,
  Platform,
  Dimensions
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {counterIncrement} from '../../actions'

const height = Dimensions.get('window').height

const ScrollView = styled.ScrollView`
  display: flex;
  align-items: center;
`

const MainContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => {
    if (props.height) {
      return `height: ${props.height}px;`
    }
  }}
`
class QualificationService extends Component {
  constructor () {
    super()
    this.state = {
      currentQualification: 0
    }
    this.ChangeStars = this.ChangeStars.bind(this)
  }
  render () {
    return (
      <MainContainer height={height}>
        <StatusBar
          hidden={Platform !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <BackgroundImage source={require('../../assets/img/exampleBG.jpg')} />
        <CenterContainer>
          <TopContainer>
            <Logo source={require('../../assets/img/status_button.png')} />
            <Text> ENTREGA EXITOSA!</Text>
            <TouchableStars action={this.ChangeStars} qualification={this.state.currentQualification} />
          </TopContainer>
          <BottomContainer>
            <InputContainer>
              <TextGray>
                Comentarios o sugerencias(Opcional)
              </TextGray>
              <StyledInput />
            </InputContainer>
            <Button onPress={this.props.counterIncrement} IconSide='check' />
          </BottomContainer>
        </CenterContainer>
      </MainContainer>
    )
  }
  ChangeStars (indice) {
    let state = this.state
    state.currentQualification = indice
    this.setState(state)
  }
}

const mapStateToProps = state => ({
  counter: state.increment.counter
})

const mapDispatchToProps = (dispatch) => {
  return ({
    counterIncrement: () => dispatch(counterIncrement())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QualificationService)
