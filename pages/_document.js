import { ThemeProvider } from '@/components/theme-provider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <title>{"Arta's Portfolio"}</title>
        {/* <link rel = "icon" href = "/assets/logo-yt.jpg" type = "image/x-icon"/>  */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </Head>
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <Main />
          <NextScript />
        {/* </ThemeProvider> */}
      </body>
    </Html>
  )
}
