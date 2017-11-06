import styled from 'styled-components/native'
import React from 'react'

const Container = styled.View`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height && props.height};
  flex: ${(props) => props.flex && props.flex};
  margin-bottom: 15px;
`
const TitleText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.color};
  text-align: justify;
`
const DescriptionText = styled.Text`
  font-size: 12px;
  color: rgb(131,131,131);
`
const Description = (props) => (
  <Container width = {props.width} height = {props.height} flex = {props.flex} >
    <TitleText color = {props.titleColor} > {props.titleText} </TitleText>
    <DescriptionText> {props.descriptionText} </DescriptionText>
  </Container>
)
export default Description
