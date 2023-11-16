import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{"Arta's Portfolio"}</title>
        {/* <link rel = "icon" href = "/assets/logo-yt.jpg" type = "image/x-icon"/>  */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
