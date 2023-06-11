import '@/styles/globals.css'
import { withAuthenticator } from '@aws-amplify/ui-react';
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withAuthenticator(App);