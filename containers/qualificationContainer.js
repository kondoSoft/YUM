import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  Button,
  TouchableStars,
  StyledInput
} from '../components'
import {
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import {addArray} from '../actions'

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
const BackgroundImage = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`
const CenterContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
`
const TopContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.Image`
  height: 80px;
  width: 80px;
`
const Text = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: 400;
`
const InputContainer = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
`
const TextGray = styled.Text`
  color: #757575;
  font-size: 12px;
  margin-left: 10px;
`
class QualificationService extends Component {
  render () {
    return (
      <MainContainer height={height}>
        <BackgroundImage source={require('../assets/img/exampleBG.jpg')} />
        <CenterContainer>
          <TopContainer>
            <Logo source={require('../assets/img/status_button.png')} />
            <Text> ENTREGA EXITOSA!</Text>
            <TouchableStars action={this.props.action} qualification={this.props.state.currentQualification} />
          </TopContainer>
          <BottomContainer>
            <InputContainer>
              <TextGray>
                  Comentarios o sugerencias(Opcional)
                </TextGray>
              <StyledInput />
            </InputContainer>
            <Button onPress={() => this.props.actionRedux} IconSide='check' />
          </BottomContainer>
        </CenterContainer>
      </MainContainer>
    )
  }
}

const mapStateToProps = state => ({
  blankReducer: state
})

function bindAction (dispatch) {
  return {
    actionRedux: addArray
  }
}

export default connect(mapStateToProps, bindAction)(QualificationService)
