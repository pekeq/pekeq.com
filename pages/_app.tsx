import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_MEASUREMENT_ID}');
      `}
    </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
