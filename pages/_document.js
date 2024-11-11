import { ThemeProvider } from '@/components/theme-provider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning >
      <Head>
        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Title */}
        {/* Meta description */}
        <meta name="description" content="Welcome to Arta's portfolio website. Discover my projects, skills, and professional experience." />
        <meta name="keywords" content="portfolio, artiys, javascript, php" />
        <meta name="robots" content="index, follow" />

        {/* Viewport settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Arta's Portfolio" />
        <meta property="og:description" content="Explore Arta's professional portfolio, featuring projects, skills, and work experiences." />
        <meta property="og:url" content="https://ArtiyS.online" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ArtiyS.online/assets/portfolio-thumbnail.jpg" /> {/* Ganti dengan path gambar Anda */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arta's Portfolio" />
        <meta name="twitter:description" content="Explore Arta's professional portfolio, featuring projects, skills, and work experiences." />
        <meta name="twitter:image" content="https://ArtiyS.online/assets/portfolio-thumbnail.jpg" /> {/* Ganti dengan path gambar Anda */}

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
