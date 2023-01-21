import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
 
export function MintNFT() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: '0x541986700d115c70b6b7be30449717677e61380c',
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'mint',
  })
  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div className="mintArea">
      <button className="mintButton" disabled={!write || isLoading} onClick={() => write && write()}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
      {isSuccess && (
        <div className="mintStatement">
          새해 복 많이 받으세요! <a href={`https://polygonscan.com/tx/${data?.hash}`} target="_blank" rel="noreferrer">View on Polygonscan</a>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div className="errorStatement">Error: {(prepareError || error)?.message}</div>
      )}
      <style jsx>{`
        button {
          font-family: 'SimSun';
          font-size: 16px;
          padding: 15px;
          border-radius: 0;
          border-style: none;
        }
        button:hover {
          cursor: pointer;
        }
        button:active {
          cursor: pointer;
          background-color: #aaaaaa;
        }
        disabledButton:hover {
          cursor:default;
        }
        .mintButton {
          margin: 0px 0px 30px 0px;
        }
        .mintStatement {
          margin: 0px 0px 30px 0px;
        }
        a:link, a:visited, a:active{
          text-decoration: none;
          color: #ffdf7b;
        }
        a:hover{
          text-decoration: none;
          color: #ffffff;
        }
        .errorStatement {
          color: #000000;
          margin: 0px 0px 30px 0px;
        }
        .mintArea {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  )
}