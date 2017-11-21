import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MainContainer = styled.View`
  flex: 1;
  flex-direction: row;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`

const LeftContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border: 1px solid ${props => props.borderC && props.borderC};
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
const RightContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border: 1px solid rgb(255,87,34);
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Quantity = styled.Text`
  font-size: 30px;
`
const ChangeNumber = (props) => {
  return 'props'
}

const Selector = (props) => (
  <MainContainer>
    <LeftContainer borderC={(props.order === 0) ? '#C7C7CC' : props.borderC} onPress={props.decrement}>
      <Icon
        name='minus'
        color={(props.order === 0) ? '#C7C7CC' : props.borderC}
        size={20}
      />
    </LeftContainer>
    <CenterContainer>
      <Quantity>{props.order}</Quantity>
    </CenterContainer>
    <RightContainer onPress={props.increment}>
      <Icon
        name='plus'
        color={'rgb(255,87,34)'}
        size={20}
      />
    </RightContainer>
  </MainContainer>
)

export default Selector
