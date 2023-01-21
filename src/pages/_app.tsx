import { ConnectKitProvider } from 'connectkit'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { client } from '../wagmi'

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <div className="main">
      <WagmiConfig client={client}>
        <div className="card">
          <ConnectKitProvider
            customTheme={{
              "--ck-font-family": "SimSun",
              "--ck-connectbutton-background": "#ffffff",
              "--ck-connectbutton-color": "#000000",
              "--ck-connectbutton-border-radius": "0px",
              "--ck-connectbutton-hover-background": "#aaaaaa",

              "--ck-primary-button-color": "#ffffff",
              "--ck-primary-button-background": "#111111",
              "--ck-primary-button-border-radius": "0px",
              "--ck-primary-button-font-weight": "bold",
              "--ck-primary-button-hover-background": "#1a1a1a",
              "--ck-primary-button-active-background": "#222222",
              "--ck-primary-button-active-border-radius": "0px",

              "--ck-secondary-button-border-radius": "0px",

              "--ck-body-background": "#000000",
              "--ck-overlay-background": "rgba(34, 34, 34, 0.5)",
              "--ck-border-radius": "0px",

              "--ck-qr-border-radius": "0px",
            }}
          >
            <NextHead>
              <link rel="icon" href="/favicon.ico" />
              <meta name="viewport" content="width=1000, initial-scale=1" />
              <meta name="theme-color" content="#000000" />
              <link rel="apple-touch-icon" href="/logo192.png" />
              <link rel="manifest" href="/manifest.json" />
              <title>Endproject</title>
            </NextHead>

            {mounted && <Component {...pageProps} />}

          </ConnectKitProvider>
        </div>
      </WagmiConfig>
      <style jsx global>{`
        @font-face{
          font-family: 'SimSun';
            src: url('/simsunb.ttf') format('truetype');
        }
        body{
          background-color: #a71832;
        }
        .main {
          margin-top: 0px;
          font-family: 'SimSun';
          background-color: #a71832;
          color: #000000;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .button {
          text-align: center;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default App
