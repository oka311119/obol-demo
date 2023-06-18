import { studioTheme } from '@/src/ui-components';
import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@aws-amplify/ui-react';
import type { AppProps } from 'next/app';

const updatedTheme = createTheme({
  // Extend the theme to update the button color
  name: "my-theme-updates", 
  tokens: {
      components: {
          button: {
              primary: {
                  backgroundColor: {
                      value: "#b71c1c"
                  },
              },
          },
      },
  },
}, studioTheme)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={updatedTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
