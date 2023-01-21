import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'

import { Account } from '../components'
import ImageCarousel from '../components/ImageCarousel'
import { MintNFT } from '../components/MintNFT'
import { Footer } from '../components/Footer'

function Page() {
  const { isConnected } = useAccount()
  return (
    <>
      <h1><a href={`https://endproject.xn--mk1bu44c`}>ENDPROJECT
        <style jsx>{`
          h1 {
            margin-top: 25px;
            font-size: 50px;
            letter-spacing: 6px;
            font-weight: normal;
          }
          a:link, a:visited, a:active {
            text-decoration: none;
            color: #000000;
          }       
          a:hover {
            text-decoration: none;
            color: #ffdf7b;
          }  
          a {
            font-size: 50px;
            letter-spacing: 6px;
            font-weight: normal;
          }
        `}</style>
      </a></h1>
      <p>Golden Tiger Eclipse, Jade Hare Prosperity
        <style jsx>{`
            p {
              margin-top: 0px;
              margin-bottom: 30px;
              font-size: 18px;
            }
        `}</style>
      </p>
      <ConnectKitButton />
      {isConnected}
      <ImageCarousel />
      <MintNFT />
      <Footer />
    </>
  )
}

export default Page
