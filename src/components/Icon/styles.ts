import styled from 'styled-components'

interface IProps {
  size?: number
}

export const Wrapper = styled.div<IProps>`
  svg {
    width: ${({ size }) => `${size || 32}px`};
    height: ${({ size }) => `${size || 32}px`};
    font-size: ${({ size }) => `${size || 32}px`};
  }
`
