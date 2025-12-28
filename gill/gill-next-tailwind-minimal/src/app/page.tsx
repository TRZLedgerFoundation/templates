'use client'

import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { WalletDisconnect } from '@/components/wallet-disconnect'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'
import { ClusterDropdown } from '@/components/cluster-dropdown'

export default function Home() {
  const { account } = useTrezoa()
  return (
    <div className="flex flex-col items-center my-12 gap-4">
      <div className=" text-2xl ">gm.</div>
      <ClusterDropdown />
      {account ? (
        <>
          <WalletDisconnect />
          <AppExplorerLink address={account.address} label={`Connected to ${ellipsify(account.address)}`} />
        </>
      ) : (
        <WalletDropdown />
      )}
    </div>
  )
}
