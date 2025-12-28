import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { Navigate } from 'react-router'

export default function AccountFeatureIndex() {
  const { account } = useTrezoa()

  if (account) {
    return <Navigate to={`/account/${account.address.toString()}`} replace />
  }

  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <WalletDropdown />
      </div>
    </div>
  )
}
