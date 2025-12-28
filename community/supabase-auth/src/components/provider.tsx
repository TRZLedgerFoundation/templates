'use client'

import { ReactNode } from 'react'
import { TrezoaProvider } from '@trezoa/react-hooks'
import { autoDiscover, createClient } from '@trezoa/client'

const client = createClient({
  endpoint: 'https://api.devnet.trezoa.com',
  walletConnectors: autoDiscover(),
})

export function Provider({ children }: { children: ReactNode }) {
  return <TrezoaProvider client={client}>{children}</TrezoaProvider>
}
