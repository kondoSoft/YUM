import React from 'react'
import styled from 'styled-components/native'
import {
  ViewHeader,
  PreviewFood,
  IconEdit
}
from '../components'

const MainContainer = styled.View`
  flex: 1;
`
const ContainerTop = styled.View`
  flex: 2;
  align-items: center;
  justify-content: flex-end;
`
const ContainerTopUp = styled.View`
  height: 30%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-color: rgb(131,131,131);
  border-bottom-width: 2px;
`
const ContainerTopDown = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 70%;
`
const ContainerTopleft = styled.View`
  flex: 1;
`
const ContainerTopRight = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`
const ContainerBottom = styled.ScrollView`
  flex: 4;
`
const ScrollContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Menu = () => (
  <MainContainer>
    <ContainerTop>
      <ContainerTopUp>
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
      </ContainerTopUp>
      <ContainerTopDown>
        <ViewHeader/>
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
 export default Menu
