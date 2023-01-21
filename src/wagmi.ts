import { getDefaultClient } from 'connectkit'
import { createClient } from 'wagmi'
import { polygon } from "wagmi/chains";

const chains = [polygon];

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'Lì Xì',
    chains,
  })
)
