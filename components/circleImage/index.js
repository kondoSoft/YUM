import styled from 'styled-components/native'
import React from 'react'

const CircleImage = styled.Image`
  width: ${(props) => props.size ? props.size : '80px'};
  height: ${(props) => props.size ? props.size : '80px' };
  border: 1px solid rgb(255,138,2);
  border-radius: 500px;
`
export default CircleImage
