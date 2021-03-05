import { Wrapper, Title, Description, SocialList } from './styles'
import { SocialButton } from '../../components/Buttons'

export const Hero = () => {
  return (
    <Wrapper>
      <Title>Hey, I&apos;m Douglas Santana</Title>
      <Description>
        Hi, I&apos;m Douglas! I&apos;am passionate about
        solving problems and creating greatlooking and responsive applications that
        make our lives easier. My primary focus is
        in web technologies, but I love expanding
        my horizon to learn new things and solve
        real-world problems.
      </Description>
      <SocialList>
        <SocialButton
          icon="github"
          url="https://github.com/douglasz1"
          target="_blank"
        />

        <SocialButton
          icon="linkedin"
          url="https://www.linkedin.com/in/douglasqt"
          target="_blank"
        />

        <SocialButton icon="email" url="mailto:douglas.santana.dev@gmail.com" />
      </SocialList>
    </Wrapper>
  )
}
