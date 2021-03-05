import styled, { keyframes } from 'styled-components'
import { BREAKPOINT_SM } from '../../theme/breakpoints'

export const Wrapper = styled.header`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const GradientAnimation = keyframes`
  0%{
    background-position-x: 0%;
  }
  100%{
    background-position-x: 400vw;
  }
`

export const Title = styled.h1`
  background: repeating-linear-gradient(
    -45deg,
    var(--gradient-to) 0%,
    #43d185 7.14%,
    #43d185 14.28%,
    var(--primary-color) 21.42%,
    var(--primary-color) 28.56%,
    var(--gradient-from) 35.7%,
    var(--gradient-from) 42.84%,
    var(--gradient-to) 50%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400vw 400vw;
  animation: ${GradientAnimation} 50s infinite linear forwards;
  -webkit-animation: ${GradientAnimation} 50s infinite linear forwards;
  font-size: 5.5vw;
  font-weight: 900;

  @media only screen and (max-width: ${BREAKPOINT_SM}) {
    font-size: 9vw;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  line-height: 1.6em;
  color: var(--text-color);
  max-width: 750px;
  width: 100%;
  padding: 12px 0;
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  a + a {
    margin-left: 12px;
  }
`
