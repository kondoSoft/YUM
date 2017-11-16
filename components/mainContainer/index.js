import styled from 'styled-components/native'
import React from 'react'

const MainContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  padding: ${(props) => props.padding ? props.padding + 'px' : '0'};
`
export default MainContainer
