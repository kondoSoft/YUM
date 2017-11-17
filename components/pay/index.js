import styled from 'styled-components/native'

export const ScreenContainer = styled.View`
    ${props => {
      if (props.height && props.width) {
        return `
              width: ${props.width}px;
              height: ${props.height}px;
            `
      }
    }}
    align-items: center;
`
