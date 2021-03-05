import styled, { keyframes } from 'styled-components'
import { BREAKPOINT_SM } from '../../theme/breakpoints'

const fixedNavbar = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  position: relative;
  border-bottom: 1px solid var(--border-color);
  transition: border 0.4s;
  transition: padding 0.2s;
  z-index: 4;

  &.navbar--fixed {
    animation: ${fixedNavbar} 0.5s;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: saturate(180%) blur(20px);
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;

    &__item {
      color: var(--menu-color);
      font-weight: 700;
      padding: 8px 24px;
      position: relative;

      a {
        &::after {
          content: '';
          background-color: var(--primary-color);
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          transition: 0.2s;
        }
        &:hover,
        &::after {
          color: var(--primary-color);
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: ${BREAKPOINT_SM}) {
    transition: padding 0.2s;
    padding: 0 32px;
  }
`
