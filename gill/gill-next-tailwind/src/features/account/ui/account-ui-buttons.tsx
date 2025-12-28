import { Address } from 'gill'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { AccountUiModalAirdrop } from './account-ui-modal-airdrop'
import { AccountUiModalReceive } from './account-ui-modal-receive'
import { AccountUiModalSend } from './account-ui-modal-send'

export function AccountUiButtons({ address }: { address: Address }) {
  const { account, cluster } = useTrezoa()

  return account ? (
    <div>
      <div className="space-x-2">
        {cluster.id === 'trezoa:mainnet' ? null : <AccountUiModalAirdrop address={address} />}
        <ErrorBoundary errorComponent={() => null}>
          <AccountUiModalSend account={account} address={address} />
        </ErrorBoundary>
        <AccountUiModalReceive address={address} />
      </div>
    </div>
  ) : null
}
