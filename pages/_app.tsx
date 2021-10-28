import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@nextui-org/react'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
