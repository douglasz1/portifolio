import styled from 'styled-components'

export const Wrapper = styled.a`
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 2px;
  border-radius: 50%;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1;
  position: relative;

  &:hover {
    transition: all 0.3s;
    border-color: var(--primary-color);
    background-color: var(--primary-color);

    svg {
      fill: var(--white);
    }
  }
`
