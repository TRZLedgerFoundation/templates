import { ReactNode } from 'react'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { WalletDropdown } from '@/components/wallet-dropdown'

export default function AccountFeatureIndex({ redirect }: { redirect: (path: string) => ReactNode }) {
  const { account } = useTrezoa()

  if (account) {
    return redirect(`/account/${account.address.toString()}`)
  }

  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <WalletDropdown />
      </div>
    </div>
  )
}
