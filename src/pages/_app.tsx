import '../styles/globals.css'
import { Providers } from '../utils/providers'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
