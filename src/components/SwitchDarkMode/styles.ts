import styled from 'styled-components'
interface IProps {
  checked?: boolean
}

export const Container = styled.div<IProps>`
  position: relative;
  display: flex;
  width: 44px;
  border: 2px solid
    ${({ checked }) =>
      checked ? 'rgba(56, 238, 125, 0.2)' : 'rgba(97, 100, 105, 0.2)'};
  height: 24px;
  border-radius: 34px;

  input {
    position: relative;
    z-index: 1;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    height: 28px;
    width: 28px;
    left: -2px;
    bottom: -4px;
    background-color: var(--slider-bg-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-top: 4px;
    }

    transition: 0.2s;
  }

  input:checked + .slider {
    background: var(--primary-color);
    left: 16px;

    svg {
      fill: var(--white);
    }
  }
`
