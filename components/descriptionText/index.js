import styled from 'styled-components/native'
import React from 'react'

const Container = styled.View`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height && props.height};
  flex: ${(props) => props.flex && props.flex};
  margin-bottom: 15px;
  flex-direction: ${(props) => props.description ? 'column':'row' };
  align-items: ${(props) => props.description ? 'flex-start' : 'flex-end'}
`
const TitleText = styled.Text`
  font-size: ${(props) => props.size ? props.size : '15px'};
  color: ${(props) => props.color};
  text-align: left;
  margin-left: -3px;
`
const DescriptionText = styled.Text`
  font-size: 12px;
  color: rgb(131,131,131);
`
const Description = (props) => (
  <Container  description = {props.descriptionText} width = {props.width} height = {props.height} flex = {props.flex} >
    <TitleText size = {props.size} color = {props.titleColor} > {props.titleText} </TitleText>
    <DescriptionText> {props.descriptionText} </DescriptionText>
  </Container>
)
export default Description
