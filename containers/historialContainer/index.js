import React ,{Component}  from 'react'
import {
  MainContainer,
  ViewHistorial,
  Scroll,
} from '../../components'
import {
  TextContainer,
  RawText,
} from '../../components/headerTitle'

class Historial extends Component {
  render(){
    return (
      <MainContainer>
        <TextContainer>
          <RawText>Recientes</RawText>
        </TextContainer>
        <Scroll>
          <ViewHistorial/>
          <ViewHistorial/>
          <ViewHistorial/>
          <ViewHistorial/>
          <ViewHistorial/>
          <ViewHistorial/>
          <ViewHistorial/>
        </Scroll>
      </MainContainer>
    )
  }

}
export default Historial
