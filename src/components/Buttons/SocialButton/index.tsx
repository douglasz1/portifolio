import { Icon } from '../../Icon'

import { Wrapper } from './styles'

interface ISocialButton {
  icon: string
  iconSize?: number
  url: string
  target?: string
}

export const SocialButton = ({
  icon,
  url,
  iconSize = 24,
  target
}: ISocialButton) => {
  return (
    <Wrapper href={url} {...{ target }}>
      <Icon name={icon} size={iconSize} />
    </Wrapper>
  )
}
