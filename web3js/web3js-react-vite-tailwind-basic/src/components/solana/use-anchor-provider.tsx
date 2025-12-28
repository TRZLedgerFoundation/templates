import { AnchorWallet, useConnection, useWallet } from '@trezoa/wallet-adapter-react'
import { AnchorProvider } from '@trezoa-xyz/anchor'

export function useAnchorProvider() {
  const { connection } = useConnection()
  const wallet = useWallet()

  return new AnchorProvider(connection, wallet as AnchorWallet, { commitment: 'confirmed' })
}
